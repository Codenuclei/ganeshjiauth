import Header from '@/app/header';
import React, { useEffect } from 'react';

function PieChartComponent() {
  useEffect(() => {
    const canvas = document.getElementById('pieChart');
    const ctx = canvas.getContext('2d');

    const data = [
      { title: 'John', value: 65 },
      { title: 'Emily', value: 95 },
      { title: 'Michael', value: 52 },
      { title: 'Sophia', value: 77 },
      { title: 'James', value: 81 },
      { title: 'Olivia', value: 34 }
    ];

    const colors = [];
    for (let i = 0; i < data.length; i++) {
      colors.push(`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`);
    }

    const drawPieChart = () => {
      const i = Math.floor(Math.random() * 5);
      data[i].value += Math.floor(Math.random() * 15);
      let total = data.reduce((sum, slice) => sum + slice.value, 0);
      let startAngle = 0;
      let j = 0;

      data.forEach(slice => {
        let sliceAngle = (slice.value / total) * 2 * Math.PI;
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, startAngle, startAngle + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = colors[j];
        ctx.fill();

        // Calculate the position for the title
        let textX = canvas.width / 2 + (canvas.height / 2 / 2) * Math.cos(startAngle + sliceAngle / 2);
        let textY = canvas.height / 2 + (canvas.height / 2 / 2) * Math.sin(startAngle + sliceAngle / 2);

        // Draw the title
        ctx.fillStyle = colors[j];
        ctx.font = '16px Arial';
        ctx.fillText(slice.title, textX, textY);

        startAngle += sliceAngle;
        j++;
      });
    };

    // Draw the pie chart every 3 seconds
    const intervalId = setInterval(drawPieChart, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Header />
      <div>
        <canvas id="pieChart" width="400" height="400" style={{ display: 'block', margin: '0 auto', paddingTop: '10%' }}></canvas>
      </div>
    </div>
  );
}

export default PieChartComponent;
