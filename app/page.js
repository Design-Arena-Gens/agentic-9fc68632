'use client'

import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([])
  const [taskInput, setTaskInput] = useState('')

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }])
      setTaskInput('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Agentic Project</h1>
        <p style={styles.subtitle}>Your Modern Web Application</p>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Interactive Counter</h2>
          <div style={styles.counterBox}>
            <button onClick={() => setCount(count - 1)} style={styles.button}>-</button>
            <span style={styles.count}>{count}</span>
            <button onClick={() => setCount(count + 1)} style={styles.button}>+</button>
          </div>
          <button onClick={() => setCount(0)} style={styles.resetButton}>Reset</button>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Task Manager</h2>
          <div style={styles.inputGroup}>
            <input
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
              placeholder="Add a new task..."
              style={styles.input}
            />
            <button onClick={addTask} style={styles.addButton}>Add</button>
          </div>
          <ul style={styles.taskList}>
            {tasks.map(task => (
              <li key={task.id} style={styles.taskItem}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  style={styles.checkbox}
                />
                <span style={{
                  ...styles.taskText,
                  textDecoration: task.completed ? 'line-through' : 'none',
                  opacity: task.completed ? 0.6 : 1
                }}>
                  {task.text}
                </span>
                <button onClick={() => deleteTask(task.id)} style={styles.deleteButton}>×</button>
              </li>
            ))}
          </ul>
          {tasks.length === 0 && (
            <p style={styles.emptyState}>No tasks yet. Add one above!</p>
          )}
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Features</h2>
          <div style={styles.grid}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>⚡ Fast</h3>
              <p style={styles.cardText}>Built with Next.js for optimal performance</p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>🎨 Modern</h3>
              <p style={styles.cardText}>Clean and responsive design</p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>🚀 Deployed</h3>
              <p style={styles.cardText}>Live on Vercel infrastructure</p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>⚛️ React</h3>
              <p style={styles.cardText}>Interactive components with hooks</p>
            </div>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>Agentic Project © 2025</p>
      </footer>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
  },
  header: {
    textAlign: 'center',
    padding: '3rem 1rem 2rem',
  },
  title: {
    fontSize: '3rem',
    margin: '0 0 0.5rem',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '1.25rem',
    opacity: 0.9,
    margin: 0,
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem 3rem',
  },
  section: {
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '16px',
    padding: '2rem',
    marginBottom: '2rem',
    color: '#333',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    margin: '0 0 1.5rem',
    fontSize: '1.75rem',
    color: '#667eea',
  },
  counterBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    margin: '1rem 0',
  },
  button: {
    fontSize: '2rem',
    width: '60px',
    height: '60px',
    border: 'none',
    borderRadius: '50%',
    background: '#667eea',
    color: 'white',
    cursor: 'pointer',
    transition: 'transform 0.2s, background 0.2s',
    fontWeight: 'bold',
  },
  count: {
    fontSize: '3rem',
    fontWeight: 'bold',
    minWidth: '80px',
    textAlign: 'center',
    color: '#667eea',
  },
  resetButton: {
    display: 'block',
    margin: '1rem auto 0',
    padding: '0.5rem 2rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '8px',
    background: '#764ba2',
    color: 'white',
    cursor: 'pointer',
    transition: 'transform 0.2s, background 0.2s',
  },
  inputGroup: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  input: {
    flex: 1,
    padding: '0.75rem',
    fontSize: '1rem',
    border: '2px solid #ddd',
    borderRadius: '8px',
    outline: 'none',
  },
  addButton: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '8px',
    background: '#667eea',
    color: 'white',
    cursor: 'pointer',
    fontWeight: '600',
  },
  taskList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  taskItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.75rem',
    marginBottom: '0.5rem',
    background: '#f8f9fa',
    borderRadius: '8px',
    transition: 'background 0.2s',
  },
  checkbox: {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
  },
  taskText: {
    flex: 1,
    fontSize: '1rem',
  },
  deleteButton: {
    width: '32px',
    height: '32px',
    border: 'none',
    borderRadius: '4px',
    background: '#ff4444',
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer',
    lineHeight: '1',
  },
  emptyState: {
    textAlign: 'center',
    color: '#999',
    padding: '2rem',
    fontStyle: 'italic',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    background: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '12px',
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: '1.5rem',
    margin: '0 0 0.5rem',
    color: '#667eea',
  },
  cardText: {
    margin: 0,
    color: '#666',
    lineHeight: '1.6',
  },
  footer: {
    textAlign: 'center',
    padding: '2rem 1rem',
    opacity: 0.9,
  },
}
