import '../scss/styles.scss'

window.onload = () => {
    const calendar: HTMLIFrameElement = document.getElementById('calendar') as HTMLIFrameElement;
    calendar.src = 'https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=America%2FChicago&mode=AGENDA&title=Troop%206134%20Calendar&showCalendars=0&showTz=0&showTitle=0&src=NTdhMzFiNWZiZjBhOWM3ODVmMDExZjliNDA2Y2E1YzRkNTJjY2MxMzY2NTRiNGE2ODUyMzkzZWEwYmU5MmU2YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23C0CA33'
};