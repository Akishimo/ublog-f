pid=$(sudo lsof -i:$1 | grep LISTEN | awk '{print $2}')

if [ -n "$pid" ]; then
  kill -9 $pid
  echo "process on port $1 has already been killed"
else
  echo "no process found on port $1"
fi