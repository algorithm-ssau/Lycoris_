FROM python:3.13.0b1

WORKDIR /pythonApi

COPY . .

RUN pip install -r requirements.txt

EXPOSE 3002

# ENTRYPOINT ["flask", "--app", "flsite", "run"]

# CMD ["--host", "0.0.0.0", "-p", "3000"]