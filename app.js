const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1"
});

function getToken()
{
    return localStorage.getItem("token");
}

function getHeaders()
{
    return {
        Authorization: `Bearer ${getToken()}`
    };
}

async function login()
{
    try
    {
        const response =
        await api.post(
            "/login",
            {
                email:
                document.getElementById("email").value,

                password:
                document.getElementById("password").value
            }
        );

        localStorage.setItem(
            "token",
            response.data.token
        );

        loadProfile();

        alert("Login berhasil");

    }
    catch(error)
    {
        alert("Login gagal");
    }
}

async function loadProfile()
{
    try
    {
        const response =
        await api.get(
            "/profile",
            {
                headers:getHeaders()
            }
        );

        const user =
        response.data;

        let roleClass =
            user.role === "admin"
            ? "role-admin"
            : "role-user";

        document.getElementById(
            "userInfo"
        ).innerHTML =
        `
        <p><b>Nama:</b> ${user.name}</p>
        <p><b>Email:</b> ${user.email}</p>
        <p class="${roleClass}">
            Role: ${user.role}
        </p>
        `;

        if(user.role === "user")
        {
            document.getElementById(
                "addContainerSection"
            ).style.display = "none";
        }
        else
        {
            document.getElementById(
                "addContainerSection"
            ).style.display = "block";
        }
    }
    catch(error)
    {
        console.log(error);
    }
}

async function getContainers()
{
    try
    {
        const response =
        await api.get(
            "/gateway/containers",
            {
                headers:getHeaders()
            }
        );

        let html = `
        <table class="container-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Container ID</th>
                    <th>Waste Type</th>
                    <th>Weight</th>
                    <th>Status</th>
                    <th>Logs</th>
                </tr>
            </thead>
            <tbody>
        `;

        response.data.forEach(container =>
        {
            html += `
            <tr>
                <td>${container.id}</td>
                <td>${container.container_id}</td>
                <td>${container.waste_type}</td>
                <td>${container.weight_kg} kg</td>
                <td>${container.status}</td>
                <td>${container.logs.length}</td>
            </tr>
            `;
        });

        html += `
            </tbody>
        </table>
        `;

        document.getElementById(
            "result"
        ).innerHTML = html;
    }
    catch(error)
    {
        alert("Gagal mengambil data");
    }
}

async function addContainer()
{
    try
    {
        await api.post(
            "/gateway/containers",
            {
                container_id:
                document.getElementById("container_id").value,

                waste_type:
                document.getElementById("waste_type").value,

                weight_kg:
                document.getElementById("weight_kg").value
            },
            {
                headers:getHeaders()
            }
        );

        alert("Container berhasil ditambahkan");

        getContainers();
    }
    catch(error)
    {
        if(error.response)
        {
            alert(
                JSON.stringify(
                    error.response.data
                )
            );
        }
    }
}

async function logout()
{
    try
    {
        await api.post(
            "/logout",
            {},
            {
                headers:getHeaders()
            }
        );
    }
    catch(error)
    {
    }

    localStorage.removeItem(
        "token"
    );

    document.getElementById(
        "userInfo"
    ).innerHTML =
    "Belum login";

    document.getElementById(
        "result"
    ).textContent =
    "Belum ada data";

    alert("Logout berhasil");
}

if(getToken())
{
    loadProfile();
}