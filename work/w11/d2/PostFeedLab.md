
# LAB

## Wireframe 

![Imgur](https://i.imgur.com/3hY0xP0.png)


You're requirements are to render out all the posts in your the state as Card components just like the wireframe!

Hints:

1. In the Feed component you'll want to write a function that when the component loads (do you need to call a function in useEffect to do this?) you'll have to fetch all the existing posts, because right now they are only being updated in state when you create something. 

- You'll be making a get request to the following controller function

controllers/posts

```js
async function index(req, res){
    try {
        // this populates the user when you find the posts
        // so you'll have access to the users information 
        // when you fetch teh posts
        const posts = await Post.find({}).populate('user').exec()
        res.status(200).json({posts})
    } catch(err){

    }
}
```

- So you'll want to create a util function that makes that request, What do you have to include in the header to make sure you send over your json web token?

- After you confirm that you are loading posts when the component loads, by checking the devtools and view the `Feed` components state and confirming that you are loading posts, then you'll want to pass those props to the `PostFeed.jsx` component

**PostFeed.jsx** 

- The job of this component is to set up the container that will render out all the `PostCard` components.

- Hint you can use semanitic UI's `grid` and `grid.Column` components to set up the feed layout in this component. It may look very similiar to the use of the grid component in the Login page. Pay attention to the props.  Remember on the docs by clicking on the tab at the top of the grid component page, you can see all the things you can add.  (IT's going to look very similar to something you already did!

- Then finally this component will render out each post, but will pass it to the `PostCard` component you made earlier that will contain all the styling for each post


**PostCard.jsx**

- Check out semantic ui's [Card component](https://react.semantic-ui.com/views/card/), be sure to click on the 'try it' on each example to see what the code looks like!

- Be sure to use the devtools and click on the component to see what properties you have as props to render out!

- The Icon image will be helpful for rendering out the 'heart' and the Image component will be helpful as well!



