import React from "react";
import { googleCredentials } from "../../config/config";

function Calendar() {
  const { apiKey, clientId } = googleCredentials;
  let gapi = window.gapi;

  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  var SCOPES =
    "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.calendarlist.readonly  https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/userinfo.profile";

  const handleClick = () => {
    gapi.load("client:auth2", () => {
      console.log("load client");

      gapi.client.init({
        apiKey,
        clientId,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.client.load("calendar", "v3", () => console.log("bam"));

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          let event = {
            summary: "Google I/O 2015",
            location: "800 Howard St., San Francisco, CA 94103",
            description:
              "A chance to hear more about Google's developer products.",
            start: {
              dateTime: "2015-05-28T09:00:00-07:00", //must be converted to ISO
              timeZone: "America/Los_Angeles",
            },
            end: {
              dateTime: "2015-05-28T17:00:00-07:00",
              timeZone: "America/Los_Angeles",
            },
            recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
            attendees: [
              { email: "lpage@example.com" },
              { email: "sbrin@example.com" },
            ],
            reminders: {
              useDefault: false,
              overrides: [
                { method: "email", minutes: 24 * 60 },
                { method: "popup", minutes: 10 },
              ],
            },
          };
          console.log(gapi.client.calendar);
          let request = gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: event,
          });

          request.execute((event) => {
            console.log("event", event);
            window.open(event.htmlLink);
          });
        });
    });
  };
  return (
    <div>
      <button onClick={handleClick}>Create Event</button>
    </div>
  );
}

export default Calendar;
