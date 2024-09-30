from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Esto permite solicitudes desde cualquier origen, incluyendo React

# Lista de tareas (almacenamiento temporal en memoria)
tasks = []

# Ruta para obtener la lista de tareas
@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks), 200

# Ruta para agregar una nueva tarea
@app.route('/tasks', methods=['POST'])
def add_task():
    task = request.json.get('task')
    if task:
        new_task = {'id': len(tasks) + 1, 'task': task}
        tasks.append(new_task)
        return jsonify(new_task), 201
    return jsonify({'error': 'Invalid input'}), 400

# Ruta para eliminar una tarea por ID
@app.route('/tasks/<int:id>', methods=['DELETE'])
def delete_task(id):
    task = next((task for task in tasks if task['id'] == id), None)
    if task:
        tasks.remove(task)
        return jsonify({'message': 'Task deleted successfully'}), 200
    return jsonify({'error': 'Task not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
