import pandas as pd

# Load the CSV file
df = pd.read_csv("table3.csv")

# Example: Accessing data from the CSV
def get_element_details(element_name):
    element_data = df[df['Element'] == element_name]
    if not element_data.empty:
        return element_data.to_dict('records')[0]
    else:
        return None


from flask import Flask, request, jsonify


app = Flask(__name__)

@app.route('/answer_question', methods=['POST'])
def answer_question():
    user_question = request.json['question']
    # Use the get_element_details function from earlier to fetch data from CSV
    element_data = get_element_details(user_question)
    if element_data:
        response = f"Element: {element_data['Element']}, Atomic Number: {element_data['AtomicNumber']}, Symbol: {element_data['Symbol']}, ..."
    else:
        response = "Sorry, I couldn't find information about that element."

    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True)
