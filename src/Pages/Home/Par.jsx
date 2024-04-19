import { Parallax } from "react-parallax";
import a from '../../assets/img/205.jpg'


const Par = () => {
    return (
        <div>
            <Parallax className="p-40" blur={10} bgImage={a} bgImageAlt="the cat" strength={200}>
                Content goes here. Parallax height grows with content height. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nostrum dicta, quas iste cupiditate beatae rem nam. Optio recusandae accusamus amet corrupti qui ipsam minus magni, ullam, sint, vitae veniam.
                In consectetur vitae dolorum facilis? Necessitatibus magnam, architecto quis qui voluptatibus vitae nisi cupiditate tenetur cum? Pariatur quis optio eligendi hic aut corporis ab doloremque amet facere! Nulla, quam veniam!
                Pariatur facilis sunt doloribus inventore eius ab, voluptas suscipit officia ducimus est placeat itaque dolorem, similique quod assumenda dolor alias nisi commodi fugiat? Mollitia aperiam nostrum at impedit culpa neque?
                Numquam delectus alias excepturi praesentium enim iusto. Corporis ipsum corrupti fuga assumenda ea minus similique architecto atque voluptas esse magni aperiam, sint quisquam impedit deleniti debitis deserunt aliquam doloremque iure.
                s eum? Magni, perferendis?
                Libero corporis molestiae consectetur, officia animi eligendi maiores dignissimos, debitis ducimus nihil illum optio magnam saepe quis fugit nesciunt iusto neque, voluptas ex accusamus! Voluptate quod beatae deleniti dolore ut!
            </Parallax>
        </div>
    );
};

export default Par;