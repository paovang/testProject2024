<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                <th><abbr title="Position">No</abbr></th>
                <th>Name</th>
                <th><abbr title="Played">Price</abbr></th>
                <th><abbr title="Won">capacity</abbr></th>
                <th><abbr title="Drawn">Description</abbr></th>
                <th></th>
                </tr>
            </thead>
            {{ countries }}
            <tbody>
                <tr>
                
                </tr>
            </tbody>
            </table>
    </div>
</template>

<script setup lang="ts">
    import axios from 'axios';
    import { reactive, onMounted, ref } from 'vue';

    const roomTypes = ref<any>([]);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI3NDk5MDI2LCJpYXQiOjE3MjY4OTQyMjYsImp0aSI6IjJmZGZkNTQwNDdiODQxMTViMGI3MjVmMDk5MTg0NGI4IiwidXNlcl9pZCI6MywiZW1haWwiOiJ0ZXN0MUBnbWFpbC5jb20ifQ.7fWT4MjaMeORdh8PfF33nxA3NelAbOvA2Lz89yZ1aCE';

    const fetchAll = async () => {
        await axios({
            method: "get",
            url: "https://iamanonymousha4ck.pythonanywhere.com/api/room-types/",
            headers: {
                Authorization: `Bearer ${token}`, 
            },
        })
        .then(function (res) {
            roomTypes.value = res.data.data;
        })
        .catch(function (error) {
            console.error("Error fetching countries:", error);
        });
    }

    onMounted(async () => {
        await fetchAll();
    })
</script>