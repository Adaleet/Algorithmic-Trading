# Saved code for further evaluation: 

import logging

def setup_logging():
    logging.basicConfig(
        level=logging.DEBUG,
        format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
        handlers=[
            logging.FileHandler("app.log"),
            logging.StreamHandler()
        ]
    )

def log_info(message):
    logging.info(message)

def log_error(message):
    logging.error(message)

'''if __name__ == "__main__":
    setup_logging()
    log_info("Logging setup complete.")
    log_error("This is an error message.")'''
