import icalendar
import json
import requests
import os

calUrl = "https://calendar.google.com/calendar/ical/vhljqr1b36na6dte64562b09kg%40group.calendar.google.com/public/basic.ics"
output_dir = os.path.join(os.path.dirname(__file__), '../story/static/cal/')
events = []
i = 0
listening = False

def write_file(file, contents):
  with open(file, "w") as text_file:
    text_file.write(contents)

def ical_line(v):
  if isinstance(v, icalendar.prop.vDDDTypes):
    return v.dt.isoformat()
  else:
    return v

r = requests.get(calUrl)
if r.status_code == 200:
  write_file(output_dir + "basic.ics", r.text)
  result = icalendar.Calendar().from_ical(r.text)

  for key, value in result.property_items():

    if key == "END" and value == "VEVENT":
      listening = False
      events.append(event)

    if listening:
      event[key.lower()] = ical_line(value)

    if key == "BEGIN" and value == "VEVENT":
      listening = True 
      event = {}

  write_file(output_dir + "basic.json", json.dumps(events, indent=2))