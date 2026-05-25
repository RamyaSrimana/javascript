
function FormTailwind() {
  return (

    <div className="bg-gray-500 h-screen flex justify-center items-center">
      <div className="w-64 m-5 p-5 bg-blue-100 border border-black rounded rounded-xl">
      <form className="grid grid-cols-2 gap-2">
      <label>Username</label>
      <input type="text" placeholder="Enter UserName"/>

      <label>Password</label>
      <input type="password" placeholder="Enter Password"/>

      <button className="bg-green-400 rounded py-2">Submit</button>
      <button className="bg-red-400 rounded py-2">Cancel</button>
      </form>
      </div>
    </div>
  )
}
export default FormTailwind;

//64,48,90