

const InstallationIdPage = async({params}) => {
    const {id} = await(params);
    console.log(id);
    
    return (
        <div>
            
            <h1>unique</h1>
        </div>
    );
};

export default InstallationIdPage;