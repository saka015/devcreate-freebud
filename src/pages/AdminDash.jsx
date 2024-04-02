const UserList = () => {
  const users = [
    { id: 1, name: "Kamal" },
    { id: 2, name: "Sandipan" },
    { id: 3, name: "Mehak" },
    { id: 4, name: "Simar" },
    { id: 5, name: "Saka" },
    { id: 6, name: "Shaan" },
    { id: 7, name: "Sam" },
    { id: 8, name: "Samriddhi" },
    { id: 9, name: "Vivek" },
    { id: 10, name: "Nishi" },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-center text-4xl my-2 mb-12">User List</h1>
      <div className="grid grid-cols-1 gap-4">
        {users.map((user) => (
          <div key={user.id} className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">{user.name}</h2>
            <div className="flex float-right gap-2">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                Accept
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
