import { useEffect, useRef } from 'react'

const Background = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      drawCode()
    }

    window.addEventListener('resize', resize)
    resize()

    function drawCode() {
      ctx.clearRect(0, 0, width, height)
      
      // White background
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, width, height)

      // Code lines – now with high‑contrast dark colors
      const code = [
        'import numpy as np',
        'import pandas as pd',
        'from sklearn.ensemble import RandomForestClassifier',
        '',
        '# Load training data',
        'data = pd.read_csv("ml_dataset.csv")',
        'X = data.drop("target", axis=1)',
        'y = data["target"]',
        '',
        'model = RandomForestClassifier(n_estimators=100)',
        'model.fit(X, y)',
        '',
        '# Predict',
        'predictions = model.predict(X_test)',
        'accuracy = accuracy_score(y_test, predictions)',
        'print(f"Accuracy: {accuracy:.2f}")',
        '',
        'def train_pipeline(data_path):',
        '    # Automated ML training',
        '    X, y = load_data(data_path)',
        '    X_train, X_test, y_train, y_test = train_test_split(X, y)',
        '    model = train_model(X_train, y_train)',
        '    return evaluate(model, X_test, y_test)',
      ]

      const lineHeight = 28        // Slightly more spacing
      const startX = 40
      let startY = 40

      ctx.font = 'bold 14px "Courier New", monospace' // Bold and larger

      code.forEach((line, index) => {
        let x = startX
        // Simple tokenization by spaces and word boundaries
        const tokens = line.split(/(\s+)/)
        
        tokens.forEach(token => {
          // Rich, dark colors – highly visible on white
          if (token.startsWith('#')) {
            ctx.fillStyle = '#007700' // deep green comments
          } else if (/^(import|from|def|class|return|if|for|while|print)$/.test(token)) {
            ctx.fillStyle = '#0000CC' // dark blue keywords
          } else if (/^[0-9]+$/.test(token)) {
            ctx.fillStyle = '#009900' // dark green numbers
          } else if (/^".*"$|^'.*'$/.test(token)) {
            ctx.fillStyle = '#AA0000' // dark red strings
          } else if (/^(np|pd|RandomForestClassifier|accuracy_score|train_test_split)$/.test(token)) {
            ctx.fillStyle = '#800080' // purple for library names
          } else {
            ctx.fillStyle = '#222222' // near-black for plain text
          }
          ctx.fillText(token, x, startY + index * lineHeight)
          x += ctx.measureText(token).width
        })
      })

      // No white overlay – code is fully visible
      // (If you want a very slight fade, use a low opacity, but we'll skip for clarity)
    }

    drawCode()
    
    return () => window.removeEventListener('resize', resize)
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
}

export default Background