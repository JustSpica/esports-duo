export function convertToWeekDays(weekDaysString: string[]) {
  const newWeekDays = weekDaysString.map(day => {
    if(day === '0') {
      return {
        label: 'Domingo',
        initial: 'Dom'
      }
    }
    if(day === '1') {
      return {
        label: 'Segunda-Feira',
        initial: 'Seg'
      }
    }
    if(day === '2') {
      return {
        label: 'Terça-Feira',
        initial: 'Ter'
      }
    }
    if(day === '3') {
      return {
        label: 'Quarta-Feira',
        initial: 'Qua'
      }
    }
    if(day === '4') {
      return {
        label: 'Quinta-Feira',
        initial: 'Qui'
      }
    }
    if(day === '5') {
      return {
        label: 'Sexta-Feira',
        initial: 'Sex'
      }
    }
    return {
      label: 'Sábado',
      initial: 'Sab'
    }
  })

  return newWeekDays;
}