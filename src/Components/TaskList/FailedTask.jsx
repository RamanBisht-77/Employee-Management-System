
const FailedTask = ({task}) =>{
    return (
        <div className="shrink-0 h-full w-[25%] p-5  bg-yellow-900 rounded-xl" >
                <div className="flex justify-between">
                    <h3 className="bg-red-600 text-sm px-3 py-1 rounded-full">{task.category}</h3>
                    <h4 className="text-sm">{task.date}</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">{task.title}</h2>
                <p className="text-sm mt-2">{task.description}</p>
                <div>
                    <button>Failed</button>
                </div>
            </div>
    )
}

export default FailedTask;