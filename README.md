## Overview

_**Memory-Maker** A new innovative place to showcase photography for the up and coming photographer or just the average creative looking for a new spot to test out there work. The Instagram that is not so Instagram (aka no ads)! This project will use Ruby on Rails creating its backend and implement multiple uses of CRUD. The front end is built with React and will use props to render the API using Axios. This project is to both test my skills and wrap up my GA experience. Come on by and check it out!


<br>

## MVP

1. Structed material in organized and challenging way
2. Create a full function Back-end using Ruby on rails
  - Have all post belong to Users
  - Be able to nest comments in both users and posts
  - Challenge myself by make it similar idea to Instagram
  - Full Crud on Posts 
  - Full Crud on Comments?
3. Create a full functioning Front-end using REACT
  - Use api call to render data to the front end
  - Use props to pass data from users 
  - Challenge myself by being innovative and Dry
4. Keep my audience engaged with SCSS and a create spin on the idea. 

<br>

### Goals

- Monday(13th): have the back end with Ruby completed and functional
- Tuesday(14th): be able to make Api calls from the front end using React. Fram work completed and the outline of all the funcitonal components written.
- Wednesday(15th): Debug any of the React components so that there fucntional. Styling SCSS with extra Time.
- Thursday(16th): Complete my MVP
- Friday(17th): Deploy and continue to complete MVP/debugging. Start to incorportate Post MVP in new branch.
- Saturday/Sunday/Monday(18-20th): Work on Post MVP/styling
- Tuesday(21st): Wrap the project, have my final deploy and prepare for presentation!

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | langauge that were writting our frontend in|
|   React Router   | The routing component that allows access to the Api |
|  axois | the system that allows us to make api calls |
|     Ruby     |  langauge that were writting our backend in |
|  Rails  | langage need to write about code in Ruby for Back-end |
|     Bcypt     |   |
|     JWT     | the token that allows authentifications |
|     SASS     |  langauge for styling |

<br>

### Client (Front End)

#### Wireframes

https://app.lucidchart.com/documents/view/d39c5b14-6fbe-4923-a572-355a2ae9c3c5/0_0

#### Component Tree

https://imgur.com/gallery/0vVTOpM

#### Component Hierarchy


``` structure

src
|__ assets/
      |__ fonts
      |__ images
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ App.jsx (State)
      |__ Nav.jsx
      |__ Login.jsx
      |__ Register.jsx
      |__ Main.jsx (Everyones post)
      |__ User.jsx (individual User Profile)
      |__ Search.jsx (Search function)
      |__ Search Page.jsx (Search for users)
      |__ User_Post.jsx (individual Posts)
      |__ Post_Crud.jsx ( Posts Create,Update,Post,Delete)
       |__ Comment_Crud.jsx ( Comments per post Create,Update,Post,Delete)
|__ services/
      |__ Post.jsx (crud per individual post)
      |__ Comments.jsx (comments crud per post)
      |__ api-helper.jsx
      |__ Auth.jsx

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._     |
|    App       | class |   y  |   n   | _App holds the State for the whole project._   |
|  Login       | class |   n   |   y   | _Loginning into each individual user._   |
|   Register   |   class    |   n  |   n   | _Creating a new user._ |
|    Main      | class |   n   |   y   | _The main page where all users posts are rendered._  |
|     User     | class |   n   |   y  | _The users profile that holds all posts from that user and where you can render individual posts._ |
|     Search   | functional |   n   |   y   | _Search Functionality._                 |
|     Search   | functional |   n   |   y   | _Renders the resuults of the navigation function from the search capability._                 |
|    User_Post | class |   n   |   y   | _The indiividual post from the User render._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Header compoent     |    E     |     1 hrs      |      hrs      |      TBD    |
| BackEnd Rails       |    H     |     5 hrs      |      hrs      |      TBD    |
| Deploy the backend  |    M     |     2 hrs      |      hrs      |      TBD    |
| API Call front end  |    M     |     2 hrs      |      hrs      |      TBD    |
| Main/App Page       |    M     |     3 hrs      |      hrs      |     TBD     |
| Search              |    M     |     2 hrs      |      hrs      |     TBD     |
| User/Posts          |    M     |     2 hrs      |      hrs      |     TBD     |
| Post CRUD           |    H     |     4 hrs      |      hrs      |     TBD     |
| Comment CRUD        |    H     |     4 hrs      |      hrs      |      TBD    |
| Footer compoent     |    E     |     1 hrs      |      hrs      |      TBD    |
|     Debugging       |    H     |     3 hrs      |      hrs      |     TBD     |
|     Stlying         |    H     |     6 hrs      |      hrs      |     TBD     |
| TOTAL               |          |     35 hrs     |     hrs       |      TBD    |


<br>

### Server (Back End)

#### ERD Model

https://imgur.com/gallery/Z19S62E

<br>

***

## Post-MVP

1. Add Likes to each individual Post
2. Add followers and following to each indiividual user
3. Notifications.jsx (Post MVP/ page shows users notifications (Likes/follows))
4. Add new and innovative SCSS (animation?)
5. Add tagging function!
6. Bookmark localstorage
7. Search Functionality
***

## Code Showcase

```
  async componentDidMount () {
    const posts = await getAllPosts()
    console.log(posts)
    this.setState({posts})
  }
  
  handleCreateComment = async (id, commentData) => {
    console.log("snowbaard")
    const newComment = await createComment(id, commentData);
    this.props.addNewComment(newComment, id);
    this.props.history.push('/');
    this.props.reload()
  }

  handleCommentUpdate = async (id, commentData) => {
    const updateComment = await putComment(id, commentData);
    const updatePost = this.state.posts.find(post => post.id == updateComment.post_id)
    updatePost.comments = [...updatePost.comments.filter(comment => comment.id !== updateComment.id), updateComment]
    this.setState(prevState => ({
      posts: prevState.posts.map(post => post.id == updatePost.id ? updatePost : post ) 
    }))
  }
  
  handleCommentDelete = async (id) => {
    const response = await deleteComment(id);
    const deletedComment = response.data
    const updatePost = this.state.posts.find(post => post.id == deletedComment.post_id)
    updatePost.comments = updatePost.comments.filter(comment => comment.id !== deletedComment.id)
    this.setState(prevState => ({
      posts: prevState.posts.map(post => post.id == updatePost.id ? updatePost: post )
    }))
  }
```
```
[:user, {comments:{include: :user}}]
```

## Code Issues & Resolutions

Throughtout this projects there were alot of highs and lows when it came to resolutions. The challenge was in the rough.
Someone onces said, "It's beauty in the struggle, ugliness in the success" -J. Cole.


