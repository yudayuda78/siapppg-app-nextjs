export default function Button({ name }: { name: string }){
    return (
        <button className="bg-[#1174ba]  text-white px-4 py-2 rounded-lg">

            {name}
        </button>
    )
}