<img src="https://i.imgur.com/fx2orT2.png">

## Learning Objectives

| Students Will Be Able To: |
| --- |
| Create a login page |
| Learn how to setup up a signup form |
| Configure multer and AWS to setup photo uploading |

## Semantic UI

We'll be using semantic UI's react components to style our components!

Lets take a look at the [semantic ui react](https://react.semantic-ui.com/usage)

## Setting it up

```
npm install semantic-ui-react semantic-ui-css
```

Then we just need to import it in our index.js to make the styling availible throughout our app

```js
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css' // import
import './index.css';
import App from './pages/App/App';
// rest of code
```


## Signup page 

- Setup

![Imgur](https://i.imgur.com/fUEUKWj.png)

- Looking at this we will need a few pieces of state to keep track of what we want in our form.  

```js
  const [error, setError ]          = useState('')
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConf: '',
    bio: ''
  });
  
  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
```

An error component was set up for you to render errors.

- Now lets set up the actual UI.  

- First lets take a look at how we can use Semantic ui really easily by looking at the [layout examples](https://react.semantic-ui.com/layouts)

- As you can see we can use the source code to get our initial setup
- Note you just import the styled components from react at the top!
- I'm going to go ahead and give you the setup for the signup below

```js
 return (
        <>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                <Image src='https://i.imgur.com/s4LrnlU.png' /> Sign Up    
              </Header>            
                <Form autoComplete="off"  onSubmit={handleSubmit}>
                <Segment stacked>               
                    <Form.Input                    
                      name="username"
                      placeholder="username"
                      value={state.username}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input
                      type="email"                  
                      name="email"
                      placeholder="email"
                      value={ state.email}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input             
                      name="password"
                      type="password"
                      placeholder="password"
                      value={ state.password}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input     
                      name="passwordConf"
                      type="password"
                      placeholder="Confirm Password"
                      value={ state.passwordConf}
                      onChange={handleChange}
                      required
                    />
                    <Form.TextArea label='bio' placeholder='Tell us more about your dogs...' onChange={handleChange}/>
                    <Form.Field> 
                      <Ref innerRef={formRef}>
                        <Form.Input
                          type="file"
                          name="photo"
                          placeholder="upload image"
                          onChange={handleFileInput}
                        />
                      </Ref>
                    </Form.Field>
                    <Button
                      type="submit"
                      className="btn"
                      disabled={invalidForm}
                    >
                    Signup
                  </Button>
                  </Segment>
                  {error ? <ErrorMessage error={error} /> : null}
                </Form>
               
            </Grid.Column>
          </Grid>
        </>
      );
```

- Now lets take a look at something we haven't done before, we see that we are uploading a photo in our form

```js
   <Form.Field> 
     
        <Form.Input
          type="file"
          name="photo"
          placeholder="upload image"
          onChange={handleFileInput}
        />
      
    </Form.Field>
```

If you look closely we have a new function in our `onChange` handler to handle the File input,

- So what do we have to do know???

*Setup up State*

```js
const [selectedFile, setSelectedFile] = useState('');
```

*handleFileInput*

```js
 function handleFileInput(e){
      console.log(e.target.files)
      setSelectedFile(e.target.files[0])
    }
```

if we upload a file, it will be in the first place of the files array given to us by the dom api!

Okay so now we have our form setup! Let's import our userService in order to make our signup request!

```js
import userService from '../../utils/userService';
```

We'll be using the following function 


```js
const BASE_URL = '/api/users/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('Email already taken!');
  })
  // Parameter destructuring!
  .then(({token}) => tokenService.setToken(token));
  // The above could have been written as
  //.then((token) => token.token);
}
```

- Okay Almost ready to make an API Call, but since we are sending over an image as binary, we have to send over a special request called multipart/formdata

from mdn 

> multipart/form-data: each value is sent as a block of data ("body part"), with a user agent-defined delimiter ("boundary") separating each part. The keys are given in the Content-Disposition header of each part.

- So this well require us to set up our data as `formData` in order to properly make the request to our server!

- So lets set up our handle submit function


```js
async function handleSubmit(e){
      e.preventDefault()
      
      // Photos have to be sent over using FormData,
      // they are sent over to the server in multiple requests
      const formData = new FormData()
      formData.append('photo', selectedFile)
      
      for (let fieldName in state){
        console.log(fieldName, state[fieldName])
        // append the rest of the data to the form obejct
        formData.append(fieldName, state[fieldName])
      }
     
      try {
          console.log(formData.forEach((item) => console.log(item)))
          
          // use the userService to make the fetch request
          await userService.signup(formData);

          // Route to wherever you want!
          // after you get a response from the server from 
          // the signup request, you need to grab the token from 
          // local storage and set the user!
        
        
        } catch (err) {
          // Invalid user data (probably duplicate email)
          console.log(err.message)
          setError(err.message)
        }
    }


// on the form 

 <Form autoComplete="off"  onSubmit={handleSubmit}>
```

The Javascript api for `FormData` allows us to create a form data, and thats what we are doing above! This is required whenever we are uploading forms!

**Server** 

Lets make sure our user model has everything we want including the file and photourl.  


```js
const userSchema = new mongoose.Schema({
  username: String,
  email: {type: String, required: true, lowercase: true, unique: true},
  password: {type: String, required: true},
  photoUrl: String,
  bio: String
}, {
  timestamps: true
});
```

Okay cool we set up our user model, lets go ahead and make a request to our server and log out our `req.body`

We should be able to log something like the following at this point!


- inside our controller 

```
async function signup(req, res) {
  console.log('hitting signup router')
  console.log(req.body, req.file)
  // rest of code
```
- our terminal

```js
{
  username: 'gary',
  email: 'gary@gary.com',
  password: 'gary',
  passwordConf: 'gary',
  bio: 'gary'
} undefined
```
