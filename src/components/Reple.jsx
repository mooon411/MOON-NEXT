import Image from "next/image";
import comment01Img from "@/assets/img/daily1.jpg";
import comment02Img from "@/assets/img/daily2.jpg";
import comment03Img from "@/assets/img/daily3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { connectDB } from "@/utils/database";

export default async function Reple() {
  const db = (await connectDB).db("zero");
  let reple01 = await db.collection("reple").find({ post_num: "1" }).toArray();
  let reple02 = await db.collection("reple").find({ post_num: "2" }).toArray();
  let reple03 = await db.collection("reple").find({ post_num: "3" }).toArray();

  return (
    <section id="talk" className="container">
      <div className="section_title">
        <h3>● comment</h3>
      </div>
      <div className="comment_wrap">
        <ul>
          <li id="commentN01">
            <form action="/api/reple/write" method="POST">
              <input type="hidden" name="post_num" value="1" />
              <div className="comment_img">
                <Image src={comment01Img} alt="daily" layout="responsive" />
              </div>
              <div className="comment_write">
                <label htmlFor="write" className="blind">
                  COMMENT
                </label>
                <input
                  id="write01"
                  name="reple_text"
                  type="text"
                  placeholder="COMMENT"
                />
                <button type="submit">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
              <div className="comments">
                <ul>
                  {reple01.map((reple, key) => (
                    <li key={key}>{reple.reple_text}</li>
                  ))}
                </ul>
              </div>
            </form>
          </li>
          <li id="commentN02">
            <form action="/api/reple/write" method="POST">
              <input type="hidden" name="post_num" value="2" />
              <div className="comment_img">
                <Image src={comment02Img} alt="daily" layout="responsive" />
              </div>
              <div className="comment_write">
                <label htmlFor="write" className="blind">
                  COMMENT
                </label>
                <input
                  id="write02"
                  name="reple_text"
                  type="text"
                  placeholder="COMMENT"
                />
                <button type="submit">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
              <div className="comments">
                <ul>
                  {reple02.map((reple, key) => (
                    <li key={key}>{reple.reple_text}</li>
                  ))}
                </ul>
              </div>
            </form>
          </li>
          <li id="commentN03">
            <form action="/api/reple/write" method="POST">
              <input type="hidden" name="post_num" value="3" />
              <div className="comment_img">
                <Image src={comment03Img} alt="daily" layout="responsive" />
              </div>
              <div className="comment_write">
                <label htmlFor="write" className="blind">
                  COMMENT
                </label>
                <input
                  id="write03"
                  name="reple_text"
                  type="text"
                  placeholder="COMMENT"
                />
                <button type="submit">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
              <div className="comments">
                <ul>
                  {reple03.map((reple, key) => (
                    <li key={key}>{reple.reple_text}</li>
                  ))}
                </ul>
              </div>
            </form>
          </li>
        </ul>
      </div>
    </section>
  );
}
