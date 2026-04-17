import React from 'react';

const RouterPage = async(params) => {
const { id } = await params;

const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
})
const data = await res.json();

const app = data.find((item) => String(data.id)=== String(id))

console.log(app);

    return (
        <div>
            <h1>{app.name}</h1>
        </div>
    );
};

export default RouterPage;