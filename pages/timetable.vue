<template>
  <div class="timetable">
    <img src="@/assets/images/icons/back.png" height="32px" width="24px" alt="logo" class='link-back' @click='back' />

    {{ status }}

    <template v-if="faculty === ''">
      <a v-for="faculty in getFaculties" @click="setFaculty(faculty)">{{ faculty.text }}</a>
    </template>
    <template v-else-if="group === ''">
      <a v-for="group in getGroups" @click="setGroup(group)">{{ group.text }}</a>
    </template>
    <template v-else>
      <div class="day" v-for="days in getTimeTable">
        {{ days.day }}
        <div class="lesson" v-for="study in days.lessons">
          Номер пары: {{ study.idx }} <br/>
          Время: {{ study.time }}<br/>
          Предмет: {{ study.lesson }}<br/>
          Тип предмета: {{ study.type }}<br/>
          teacherType: {{ study.teacherType }}<br/>
          Преподаватель: {{ study.teacherName }}<br/>
          Кабинет: {{ study.cabinet }}<br/>
          {{ study.current ? 'Текущая' : '' }}<br />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import {parse} from 'node-html-parser';

export default {
  name: "TimetableView",

  data() {
    return {
      faculties: [],
      timetable: [],
      groups: [],
      faculty: '',
      group: '',
      status: 'Обновление факультетов...'
    }
  },

  mounted() {
    axios.get('https://help.invasion.su/cors/www.asu.ru/timetable/students/').then((res) => {
      if (res.data) {
        const faculties = parse(res.data).querySelectorAll('.link_ptr_left.margin_bottom');
        faculties.forEach((faculty) => {
          const linkinfo = faculty.querySelector('a');
          const text = linkinfo.innerText;
          const link = linkinfo.attrs.href;

          this.faculties.push({
            text,
            link
          });

          this.status = 'Факультеты обновлены';
          localStorage.setItem('faculties', JSON.stringify(this.faculties));
        });
      } else {
        this.status = `Невозможно получить факультеты, нет подключения к интернету`;
      }
    });
  },

  computed: {
    getFaculties() {
      try {
        const cache = JSON.parse(localStorage.getItem('faculties')) || [];
        if (cache && this.faculties.length <= 0) return cache;
      } catch {
      }

      return this.faculties;
    },

    getGroups() {
      try {
        const cache = JSON.parse(localStorage.getItem(`groups_${this.faculty}`)) || [];
        if (cache && this.groups.length <= 0) return cache;
      } catch {
      }

      return this.groups;
    },

    getTimeTable() {
      try {
        const cache = JSON.parse(localStorage.getItem(`timetable_${this.faculty}_${this.group}`)) || [];
        if (cache && this.timetable.length <= 0) return cache;
      } catch {
      }

      return this.timetable;
    }
  },

  methods: {
    back() {
      if (this.group !== '') {
        this.group = '';
      } else if (this.faculty !== '') {
        this.faculty = '';
      } else {
        this.$router.push('/');
      }
    },

    setFaculty(faculty) {
      this.faculty = faculty.link;
      this.status = 'Обновление групп...';

      axios.get(`https://help.invasion.su/cors/www.asu.ru/timetable/students/${this.faculty}`).then((res) => {
        if (res.data) {
          const groups = parse(res.data).querySelectorAll('.link_ptr_left.margin_bottom');
          groups.forEach((group) => {
            const linkinfo = group.querySelector('a');
            const text = linkinfo.innerText;
            const link = linkinfo.attrs.href;

            this.groups.push({
              text,
              link
            });

            this.status = 'Группы обновлены';
            localStorage.setItem(`groups_${this.faculty}`, JSON.stringify(this.groups));
          });
        } else {
          this.status = `Невозможно получить группы, нет подключения к интернету`;
        }
      });
    },

    setGroup(group) {
      this.group = group.link;
      this.status = 'Обновление расписания...';

      axios.get(`https://help.invasion.su/cors/www.asu.ru/timetable/students/${this.faculty}${group.link}`).then((res) => {
        if (res.data) {
          const timetable = parse(res.data).querySelector('table.schedule_table');

          if(timetable) {
            let curLessons = [];
            let day = '';

            timetable.childNodes.forEach((data) => {
              let type = 0;
              if (data.attrs && data.attrs.class) {
                if (data.attrs.class.startsWith('schedule_table-date')) {
                  type = 1;
                } else if (data.attrs.class.startsWith('schedule_table-time')) {
                  if (data.attrs.class.indexOf('schedule_table-current') !== -1) {
                    type = 3;
                  } else {
                    type = 2;
                  }
                }
              }

              if (type === 1) {
                if (curLessons.length > 0) {
                  this.timetable.push({
                    day: day,
                    lessons: curLessons
                  });
                  curLessons = [];
                }

                day = data.querySelector('td').querySelector('span').innerText.trim();
              } else if (type === 2 || type === 3) {
                const lessonData = data.querySelectorAll('td');

                const idx = lessonData[0].innerText.trim();
                const time = lessonData[1].innerText.trim();
                const study = lessonData[2].querySelectorAll('span');
                const stype = study[1]?.innerText?.trim();
                const lesson = lessonData[2]?.innerText?.trim();
                const teachData = lessonData[3].querySelector('nobr');
                const teacherType = teachData?.querySelector('span')?.innerText?.trim();
                const teacherName = teachData?.querySelector('a')?.innerText?.trim();
                const cabinet = lessonData[4]?.querySelector('nobr')?.querySelector('a')?.innerText?.trim();

                curLessons.push({
                  idx,
                  time,
                  lesson,
                  type: stype,
                  teacherType,
                  teacherName,
                  cabinet,
                  current: type === 3
                });
              }
            });

            this.status = 'Расписание обновлено';
            localStorage.setItem(`timetable_${this.faculty}_${this.group}`, JSON.stringify(this.timetable));
          } else {
            this.status = 'Нет занятий';
          }
        } else {
          this.status = `Невозможно получить расписание, нет подключения к интернету`;
        }
      });
    }
  }
}
</script>

<style scoped lang="scss">
.timetable {
  color: #fff;
  background: #000;

  a {
    display: block;
    color: #fff;
    padding: 10px;
  }
}

.day, .lesson {
  padding: 10px;
}
</style>
