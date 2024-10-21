interface userData{
    myName: string
}


const UserIndexPage: React.FC<userData> = ({myName}) => {
    return <h1>Hello {myName ? myName : 'No name'} </h1>;
};

export default UserIndexPage;