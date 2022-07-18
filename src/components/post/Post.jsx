import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://i.pinimg.com/originals/5c/04/02/5c0402c7467cca99f501e8fedb81cf72.gif"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Gaming</span>
          <span className="postCat">Music</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor clit</span>
        <hr />
        <span className="postDate">1 hr ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veritatis
        odio atque minus magni itaque nemo numquam, ea, cum odit voluptas Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Eaque veritatis odio
        atque minus magni itaque nemo numquam, ea, cum odit voluptas laboriosam
        deleniti optio temporibus quis esse harum quibusdam iure!Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Eaque veritatis odio atque
        minus magni itaque nemo numquam, ea, cum odit voluptas laboriosam
        deleniti optio temporibus quis esse harum quibusdam iure! laboriosam
        deleniti optio temporibus quis esse harum quibusdam iure!
      </p>
    </div>
  );
}
