from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/riskfactors')
def riskfactors():
    return render_template('riskfactors.html')

@app.route('/worksheets')
def worksheets():
    return render_template('worksheets.html')

@app.route('/dashboards')
def dashboards():
    return render_template('dashboards.html')

@app.route('/story')
def story():
    return render_template('story.html')

@app.route('/insights')
def insights():
    return render_template('insights.html')

@app.route('/team')
def team():
    return render_template('team.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)
