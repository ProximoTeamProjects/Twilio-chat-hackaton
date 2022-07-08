import useChat from "../hooks/useChat"

export const Form = () => {

  const { handleSubmit, user, handleInputChange} = useChat();
  const { name, lobby } = user;

  return (
    <form  className="flex flex-col items-center mt-10 px-4 text-xl max-w-screen-2xl mx-auto w-full " onSubmit={handleSubmit}>
        
        <div className="flex flex-col w-full focus-within:text-gray-400">
            <label className="font-bold cursor-pointer" htmlFor='user'>Nombre de usuario</label>
            <input 
                id="user"
                name="name"
                type='text'
                placeholder='Elliot Alderson'
                className="mt-2 bg-gray-100 h-8 rounded placeholder:text-slate-500 placeholder:text-base p-1"
                value={ name }
                onChange={ handleInputChange }
            />
        </div>
        <div className="flex flex-col mt-7 w-full focus-within:text-gray-400">
            <label className="font-bold cursor-pointer"  htmlFor='lobby'>Nombre de la sala:</label>
            <input 
                id="lobby"
                name="name"
                type='textarea'
                placeholder='Elliot Alderson'
                className="mt-2 bg-gray-100 rounded placeholder:text-slate-500 placeholder:text-base p-1 gray"
                value={ lobby }
                onChange={ handleInputChange }
            />
        </div>

        <button 
          type='submit'
          className="mt-5 w-24 h-10 bg-emerald-500 text-sm text-white rounded-xl hover:bg-white hover:transition-colors hover:border-2 hover:border-emerald-500 hover:text-black duration-200 hover:duration-500"
        >Entrar</button>
        <button 
          type='submit'
          className="mt-5 w-24 h-10 border-2 border-emerald-500 text-sm rounded-xl align-middle hover:bg-emerald-500 hover:transition-colors hover:border-none hover:text-white hover:cursor-pointer duration-200 hover:duration-500"
        >Anonimo 🥷</button>

    </form>
  )
}
