const keys = require('../../config/key')

module.exports = (survey) => {
 return `
  <html>
    <body>
      <div style="text-align: center";>
        <h2>Hello!</h2>
        <p>${survey.body}</p>
        <div>
          <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
        </div>
        <div>
          <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
        </div>
      </div>
    </body>
  </html>
 `;
}
