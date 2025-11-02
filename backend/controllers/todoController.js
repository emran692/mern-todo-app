import Todo from "../models/todoModel.js";

// ✅ Get all todos for a user
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while fetching todos" });
  }
};

// ✅ Add new todo
export const addTodo = async (req, res) => {
  try {
    const { text, dueDate, dueTime } = req.body;

    const todo = await Todo.create({
      user: req.user.id,
      text,
      dueDate,
      dueTime,
    });

    res.status(201).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while adding todo" });
  }
};

// ✅ Update existing todo
export const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) return res.status(404).json({ message: "Todo not found" });
    if (todo.user.toString() !== req.user.id)
      return res.status(401).json({ message: "Not authorized" });

    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(updatedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while updating todo" });
  }
};

// ✅ Delete todo
export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) return res.status(404).json({ message: "Todo not found" });
    if (todo.user.toString() !== req.user.id)
      return res.status(401).json({ message: "Not authorized" });

    await todo.deleteOne();
    res.json({ message: "Todo deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while deleting todo" });
  }
};
