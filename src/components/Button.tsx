
type Props = {
    title:string
    action?:any
    type: "button" | "submit" | "reset" | undefined
}
const Button = ({title,action,type}:Props) => {
  return (
    <button 
    type={type}
    onClick={action}
    className="w-full p-2 bg-red-600 rounded-lg flex justify-center my-4">
    <span className="text-white text-sm font-bold capitalize">
     {title}
    </span>
  </button>
  )
}

export default Button