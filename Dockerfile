FROM python:3.10.2-bullseye
WORKDIR /code
EXPOSE 2700
COPY requirements.txt .
RUN python -m pip install -r requirements.txt
COPY webrtc .
COPY model /code/model
CMD python asr_server_webrtc.py