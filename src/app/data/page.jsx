import Card from "@/components/card/Card";


const DataPage = async() => {

const res = await fetch("https://jsonplaceholder.typicode.com/users")
const result = await res.json();
console.log(result);
if(result.length === 6){}

    return (
        <div>
        
            <div className="grid grid-cols-3 gap-5">
                {
                    result.slice(0,5).map((result) => <div className="border-2 " key={result.id}>

                        <h1>{result.name}</h1>
                        <h1>{result.email}</h1>
                    </div>)
                }

                
            </div>
        </div>
    );
};

export default DataPage;
