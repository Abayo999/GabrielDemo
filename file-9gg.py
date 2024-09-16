import json
from flask import Flask, request, render_template

app = Flask(__name__)

# Load charity data from a JSON file
with open('charity_data.json', 'r') as file:
    charity_data = json.load(file)

# Function to search for a charity by name
def search_charity(name):
    for charity in charity_data:
        if charity['name'].lower() == name.lower():
            return charity
    return None

# Function to retrieve the expenditure report for a charity
def get_expenditure_report(charity):
    return charity['expenditure']

# Route for the home page
@app.route('/')
def home():
    return render_template('home.html')

# Route for searching for a charity
@app.route('/search', methods=['POST'])
def search():
    name = request.form['charity_name']
    charity = search_charity(name)
    if charity:
        return render_template('charity_details.html', charity=charity)
    else:
        return "Charity not found."

# Route for displaying the expenditure report
@app.route('/expenditure/<charity_name>')
def expenditure(charity_name):
    charity = search_charity(charity_name)
    if charity:
        expenditure_report = get_expenditure_report(charity)
        return render_template('expenditure.html', expenditure=expenditure_report, charity=charity)
    else:
        return "Charity not found."

# Route for displaying the list of all charities
@app.route('/charities')
def charities():
    return render_template('charities.html', charities=charity_data)

if __name__ == '__main__':
    app.run()