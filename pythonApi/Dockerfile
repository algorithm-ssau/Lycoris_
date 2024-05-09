FROM python:3.13.0b1

WORKDIR /pythonApi

COPY . .

RUN pip install Flask==3.0.3
RUN pip install Flask-PyMongo==2.3.0
RUN pip install Flask-JWT-Extended==4.6.0
RUN pip install Werkzeug==3.0.2

EXPOSE 3000

# ENTRYPOINT ["flask", "--app", "flsite", "run"]

# CMD ["--host", "0.0.0.0", "-p", "3000"]