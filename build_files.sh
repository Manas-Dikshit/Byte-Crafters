echo "BUILD START"
# create a virtual environment named 'venv' if it doesn't already exist
python3.12 -m venv venv

# activate the virtual environment
source venv/bin/activate
pip install -r requirements.txt
python3.12 manage.py collectstatic
echo "BUILD END"