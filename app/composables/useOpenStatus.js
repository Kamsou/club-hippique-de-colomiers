// Horaires : lundi → samedi, 9h → 19h (heure de Paris)
const OPEN_HOUR = 9
const CLOSE_HOUR = 19
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const parisNow = () => {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Paris',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23'
  }).formatToParts(new Date())
  const get = (type) => parts.find((p) => p.type === type)?.value
  return {
    day: DAYS.indexOf(get('weekday')),
    hours: Number(get('hour')) + Number(get('minute')) / 60
  }
}

export const useOpenStatus = () => {
  const status = ref(null)

  const update = () => {
    const { day, hours } = parisNow()
    const isOpenDay = day !== 0

    if (isOpenDay && hours >= OPEN_HOUR && hours < CLOSE_HOUR) {
      status.value = { open: true, label: `Ouvert · jusqu'à ${CLOSE_HOUR}h` }
    } else if (isOpenDay && hours < OPEN_HOUR) {
      status.value = { open: false, label: `Fermé · ouvre à ${OPEN_HOUR}h` }
    } else if (day === 6 || day === 0) {
      status.value = { open: false, label: `Fermé · ouvre lundi ${OPEN_HOUR}h` }
    } else {
      status.value = { open: false, label: `Fermé · ouvre demain ${OPEN_HOUR}h` }
    }
  }

  let timer
  onMounted(() => {
    update()
    timer = setInterval(update, 60_000)
  })
  onUnmounted(() => clearInterval(timer))

  return status
}
