
const NewTask = ({task,updateTaskStatus}) =>{
    return (
        <div className="shrink-0 h-full w-[25%] p-5 bg-blue-900 rounded-xl max-[700px]:w-[100%]" >
                <div className="flex justify-between">
                    <h3 className="bg-red-600 text-sm px-3 py-1 rounded-full">{task.category}</h3>
                    <h4 className="text-sm">{task.date}</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">{task.title}</h2>
                <p className="text-sm mt-2">{task.description}</p>
                <div className="mt-4">
                    <button onClick={()=> updateTaskStatus(task.id, "active")} className="bg-green-500">Accept Task</button>
                </div>
            </div>
    )
}

export default NewTask;