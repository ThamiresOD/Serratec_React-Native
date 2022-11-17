import { api } from "./api";

export const getTasks = async () => {
    try {
        const { data } = await api.get("/tasks")
        console.log(data)
        return data
    } catch(e) {
        console.log(e)
    }
}

export const newTasks = async (novaTask) => {
    try {
        const task = await api.post("/tasks", novaTask)
        return task
    } catch(e) {
        console.log(e)
    }
}

export const deleteTasks = async (id) => {
    try {
        const deletedTask = await api.delete("/tasks/"+id)
        return deletedTask
    } catch(e) {
        console.log(e)
    }
}

export const updateTasks = async (task) => {
    try {
        const updateTasks= await api.put("/tasks/"+task.id, task)
        return updateTasks
    } catch(e) {
        console.log(e)
    }
}