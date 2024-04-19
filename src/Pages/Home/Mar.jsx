import Marquee from "react-fast-marquee";
import a from '../../assets/img/baiust.png'

const Mar = () => {
    return (
        <div className="text-2xl font-bold border-2 border-red-400 m-2 bg-emerald-300">
            <Marquee>
                <p className="flex justify-center items-center gap-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, natus debitis! <img className="h-5 w-4" src={a} alt="" /> Dolores, sint, praesentium eveniet beatae neque atque nesciunt molestiae voluptates debitis fugit at. <img className="h-5 w-4" src={a} alt="" /> Incidunt dolorum tempore quo cumque molestias?
                    Sit recusandae voluptatibus quibusdam nulla doloribus odio dolorem tenetur ratione assumenda? <img className="h-5 w-4" src={a} alt="" /> Sint est numquam, ratione ut dolores libero voluptatibus iure, nihil, dolorum adipisci voluptate iste? <img className="h-5 w-4" src={a} alt="" /> Dicta asperiores sed laudantium minima.
                    Possimus itaque ullam odit inventore optio distinctio <img className="h-5 w-4" src={a} alt="" /> neque similique, mollitia sequi aliquam, velit eaque, impedit ab vel <img className="h-5 w-4" src={a} alt="" /> nam sed quod quos repellendus placeat fugit. Repellendus alias recusandae provident cum fuga.
                    t sit consequatur expedita!</p>
            </Marquee>
        </div>
    );
};

export default Mar;