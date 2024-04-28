const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  padding: 8,
  border: "1px solid #ddd",
}

const tableCellStyle = {
  padding: 8,
  border: "1px solid #ddd",
  color: "blue",
}

export default function F12Main() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20, fontSize: 20 }}>Page List</h1>
      <table style={{ borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>URL</th>
            <th style={tableHeaderStyle}>Page</th>
          </tr>
        </thead>
        <tbody>
<tr>
            <td style={tableCellStyle}><a href='/LandingPage'>/LandingPage</a></td>
            <td style={tableCellStyle}><a href='/LandingPage'>Landing Page</a></td>
          </tr>
          <tr>
            <td style={tableCellStyle}><a href='/LoadingScreenRevise'>/LoadingScreenRevise</a></td>
            <td style={tableCellStyle}><a href='/LoadingScreenRevise'>LoadingScreenRevise</a></td>
          </tr>
          <tr>
            <td style={tableCellStyle}><a href='/AboutUsPage'>/AboutUsPage</a></td>
            <td style={tableCellStyle}><a href='/AboutUsPage'>/AboutUsPage</a></td>
          </tr>
          <tr>
            <td style={tableCellStyle}><a href='/DetailFurniturePageRevise'>/DetailFurniturePageRevise</a></td>
            <td style={tableCellStyle}><a href='/DetailFurniturePageRevise'>DetailFurniturePageRevise</a></td>
          </tr>
          <tr>
            <td style={tableCellStyle}><a href='/FurniturePageRevise'>/FurniturePageRevise</a></td>
            <td style={tableCellStyle}><a href='/FurniturePageRevise'>FurniturePageRevise</a></td>
          </tr>
          <tr>
            <td style={tableCellStyle}><a href='/RecomendationPageRevise'>/RecomendationPageRevise</a></td>
            <td style={tableCellStyle}><a href='/RecomendationPageRevise'>RecomendationPageRevise</a></td>
          </tr>
</tbody>
      </table>
    </div>
  );
}