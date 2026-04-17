import data from "@/../public/data.json"
import Friends from "@/components/friends/Friends";

const HomePage = () => {

// console.log(data);

    return (
        <div className="">
            <h1>all friends</h1>
            <div className="grid grid-cols-4 gap-5">
                {
                        data.map(item => <Friends key={item.id} item={item}></Friends>) 
                }
            </div>
        </div>
    );
};

export default HomePage;