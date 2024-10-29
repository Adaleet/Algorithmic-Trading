import psutil
import time

def monitor_cpu():
    cpu_usage = psutil.cpu_percent(interval=1)
    print(f"CPU Usage: {cpu_usage}%")

def monitor_memory():
    memory = psutil.virtual_memory()
    print(f"Memory Usage: {memory.percent}%")

'''if __name__ == "__main__":
    while True:
        monitor_cpu()
        monitor_memory()
        time.sleep(5)'''
