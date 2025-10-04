export default function SearchBar({ value, onChange, onSubmit, placeholder='Поиск...' }) {
  return (
    <form onSubmit={(e)=>{e.preventDefault(); onSubmit?.()}} className="flex w-full max-w-2xl mx-auto">
      <input
        className="input rounded-l-xl"
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        placeholder={placeholder}
      />
      <button className="btn rounded-l-none rounded-r-xl" type="submit">Искать</button>
    </form>
  )
}
