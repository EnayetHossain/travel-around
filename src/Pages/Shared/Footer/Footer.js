import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className='desktop-max'>
            <div className='copyright'>
                <p>&copy; 2023 Enayet Hossain All right reserved</p>
                <p className='developed'>Developed by: Enayet Hossain</p>
            </div>

            <div className='brands'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="968" viewBox="0 0 603.145 233.533"><g stroke="#000" stroke-width=".4" stroke-miterlimit="2.613"><path d="M48.008 162.157c4.943-2.283 7.882-6.55 7.882-11.667 0-4.425-1.522-8.286-4.403-11.168-3.165-3.163-7.874-4.979-12.92-4.979H.2v1.009s1.4.057 1.522.179c.136.137.205.481.205 1.027v53.932c0 .545-.069.89-.205 1.026-.123.122-1.522.18-1.522.18v1.008h39.623c9.014 0 18.109-5.065 18.109-16.383 0-6.969-3.279-11.596-9.924-14.164zm-3.175-17.068c1.209 1.211 1.85 2.834 1.85 4.695a8.137 8.137 0 0 1-2.385 5.799c-1.797 1.797-4.418 2.787-7.38 2.787H11.137v-15.916h25.389c3.709 0 6.582.91 8.307 2.635zm1.6 36.658c-1.863 1.863-4.746 2.848-8.337 2.848H11.137V166.48h23.426c5.662 0 9.691 1.158 11.974 3.44 1.452 1.451 2.187 3.394 2.187 5.774-.001 2.496-.771 4.534-2.291 6.053zM138.417 190.332l-13.601-23.197c9.111-.513 14.946-6.691 14.946-16.017 0-4.519-1.534-8.441-4.437-11.344-3.553-3.553-8.878-5.431-15.4-5.431H82.659v1.009s2.081.031 2.323.273c.129.129.189.426.189.933v53.932c0 .507-.06.803-.189.931-.243.244-2.323.275-2.323.275v1.008h14.233v-1.008s-2.081-.031-2.323-.275c-.128-.128-.189-.424-.189-.931v-22.44h20.892c1.392 2.265 11.844 20.692 13.005 22.91.431.823-2.669.758-2.669.758v.986h16.039v-.982c-.001 0-2.58-.35-3.23-1.39zM94.38 159.94v-17.486h25.546c3.639 0 6.562 1 8.455 2.892 1.422 1.422 2.173 3.255 2.173 5.302 0 3.042-.795 5.379-2.364 6.948-1.938 1.938-4.709 2.345-6.693 2.345H94.38v-.001zM215.487 131.832l-.074.515c-.285 1.997-.748 1.997-1.762 1.997h-51.188v1.009s1.935.029 2.163.257c.131.132.192.433.192.949v53.932c0 .516-.061.817-.192.948-.228.229-2.163.258-2.163.258v1.008h51.188c1.014 0 1.477 0 1.762 1.997l.074.516h.929v-13.135h-.929l-.074.515c-.285 1.998-.748 1.998-1.762 1.998h-39.625v-17.173h26.014c1.011 0 1.473 0 1.76 2.301l.065.525h.938V156.8h-.929l-.074.516c-.285 1.996-.748 1.996-1.761 1.996h-26.014v-16.857h39.625c1.014 0 1.477 0 1.762 1.997l.074.515h.929v-13.134h-.928v-.001zM239.367 134.344v1.009s1.545.063 1.683.201c.134.134.202.472.202 1.005v53.932c0 .533-.068.871-.202 1.005-.137.137-1.683.201-1.683.201v1.008h12.978v-1.008s-1.546-.064-1.683-.201c-.134-.134-.201-.472-.201-1.005v-53.932c0-1.094 1.884-1.206 1.884-1.206v-1.009h-12.978zM326.009 131.832l-.073.515c-.285 1.997-.748 1.997-1.761 1.997h-47.74c-1.014 0-1.476 0-1.762-1.997l-.073-.515h-.929v13.134h.929l.073-.515c.286-1.997.748-1.997 1.762-1.997H295.7v48.036c0 .507-.061.803-.189.931-.243.244-2.324.275-2.324.275v1.008h14.233v-1.008s-2.08-.031-2.323-.275c-.129-.128-.189-.424-.189-.931v-48.036h19.267c1.013 0 1.476 0 1.761 1.997l.073.515h.929v-13.134h-.929zM395.793 181.768s-.49 2.827-3.045 2.827h-32.625v-48.036c0-1.576 2.591-1.206 2.591-1.206v-1.009H348.48v1.009s2.009.03 2.244.266c.13.129.19.429.19.94v53.932c0 .511-.061.81-.19.939-.235.236-2.244.267-2.244.267v1.008h44.269c2.626 0 3.159 2.966 3.159 2.966h.86v-13.902h-.975v-.001zM418.792 134.344v1.009s1.546.063 1.683.201c.134.134.201.472.201 1.005v53.932c0 .533-.067.871-.201 1.005-.137.137-1.683.201-1.683.201v1.008h12.978v-1.008l-1.683-.201c-.134-.134-.202-.472-.202-1.005v-53.932c0-1.094.12-1.206 1.285-1.206h.6v-1.009h-12.978zM504.972 134.344v1.575s2.08.031 2.323.273c.129.129.188.426.188.933v42.046c-5.743-6.728-36.27-42.399-36.27-42.752 0-.221 2.608-.5 2.608-.5v-1.575H456.76v1.575s2.228.033 2.484.29c.127.127.186.418.186.916v52.798c0 .498-.059.789-.186.916-.257.257-2.484.29-2.484.29v1.575h13.292v-1.575s-2.08-.031-2.323-.274c-.129-.129-.189-.425-.189-.932v-44.406c6.092 7.103 38.469 44.83 38.469 45.191 0 .158-2.452.45-2.452.45v1.546h14.705v-1.575s-2.227-.033-2.483-.29c-.127-.127-.186-.418-.186-.916v-52.798c0-.975 0-1.206 2.069-1.206h.6v-1.575h-13.29zM601.587 180.953s-.678.581-.778.637c-.004-.038-.009-.062-.009-.117v-13.866c0-1.471.461-1.845 1.43-2.087l.454-.113v-2.011H576.29c-1.075 0-1.506-.383-1.77-1.572l-.104-.47h-2.023v11.879h2.057l.078-.509c.236-1.533.41-1.533 1.763-1.533h15.301v9.447c-6.265 4.646-13.877 5.056-21.149 5.056-6.349 0-12.804-2.665-17.268-7.128-3.978-3.978-6.08-8.935-6.08-14.335 0-13.255 10.479-22.876 24.918-22.876 8.224 0 16.7 4.095 19.655 7.051.824.824.853 1.229.866 1.3.257 1.328-.004 1.887-.004 1.887l1.247.971 6.979-11.949-1.744-.698s-1.403 1.103-1.795 1.103c-.295 0-1.408-.585-2.485-1.15-4.195-2.205-12.005-6.308-22.954-6.308-9.751 0-19.036 3.691-25.474 10.13-5.507 5.507-8.417 12.474-8.417 20.148 0 7.806 2.784 14.717 8.051 19.983 6.145 6.145 15.362 9.668 25.291 9.668 12.57 0 22.773-3.449 31.195-10.544l.444-.375a434.975 434.975 0 0 0-1.281-1.619zM258.577 215.631v-4.409h.389c.032.615.486.713 1.037.713.681 0 1.945-.648 1.945-1.459 0-.389-.324-.648-.778-.681v-.39h4.863v.39c-.713 0-.907.13-.907.746v21.333c0 .615.194.746.972.746v.389h-5.381v-.389c.907 0 1.102-.131 1.102-.746V214.27c-1.07.454-2.853.421-2.853 1.361h-.389zM288.958 220.624c2.788.745 4.863 2.756 4.863 5.771 0 3.956-4.021 6.938-10.959 6.938s-10.958-2.982-10.958-6.938c0-3.015 2.075-5.025 4.863-5.771v-.065c-2.399-.907-3.891-2.27-3.891-5.446 0-3.307 3.955-6.03 9.985-6.03 6.031 0 9.986 2.724 9.986 6.03 0 3.177-1.492 4.539-3.891 5.446v.065h.002zm-6.096 9.985c5.771 0 7.652-2.074 7.652-4.247 0-2.756-1.978-4.247-7.652-4.247-5.673 0-7.651 1.491-7.651 4.247 0 2.173 1.881 4.247 7.651 4.247zm0-11.217c5.382 0 6.679-1.719 6.679-3.729s-1.296-3.857-6.679-3.857c-5.382 0-6.679 1.848-6.679 3.857s1.297 3.729 6.679 3.729zM314.757 220.624c2.788.745 4.863 2.756 4.863 5.771 0 3.956-4.021 6.938-10.958 6.938-6.938 0-10.958-2.982-10.958-6.938 0-3.015 2.075-5.025 4.863-5.771v-.065c-2.399-.907-3.89-2.27-3.89-5.446 0-3.307 3.956-6.03 9.986-6.03s9.985 2.724 9.985 6.03c0 3.177-1.491 4.539-3.891 5.446v.065zm-6.095 9.985c5.771 0 7.651-2.074 7.651-4.247 0-2.756-1.978-4.247-7.651-4.247s-7.651 1.491-7.651 4.247c0 2.173 1.88 4.247 7.651 4.247zm0-11.217c5.382 0 6.679-1.719 6.679-3.729s-1.297-3.857-6.679-3.857-6.679 1.848-6.679 3.857 1.297 3.729 6.679 3.729z" /><path d="M336.47 225.487v-12.32l-10.569 12.32h10.569zm-13.488 2.983c-.584 0-.843.13-.973.908h-.39v-2.983l13.164-15.173c.486-.584.648-.746.648-.94 0-.324-.162-.454-.778-.486v-.39h6.03v.39c-.714 0-.908.13-.908.746v14.946h2.983c.583 0 .843-.13.973-1.038h.389v5.059h-.389c-.13-.876-.39-1.038-.973-1.038h-2.983v3.404c0 .615.194.746.908.746v.389h-5.123v-.389c.811 0 .908-.131.908-.746v-3.404h-13.486v-.001zM339.126 64.204c0 9.427-5.233 14.216-13.608 18.538a27.35 27.35 0 0 0 3.086 4.63c-4.755 4.621-10.944 8.089-17.972 9.874-.731-1.828-2.911-3.335-5.836-4.162l-.283-20.323c2.711 1.713 6.035 2.708 9.717 2.708 10.892 0 18.869-9.498 18.869-20.136 0-5.369-2.173-10.688-5.722-14.327 6.214-5.466 10.73-13.53 5.216-19.993-5.171-6.06-16.203-5.427-28.8.123l-.077-5.491a8.173 8.173 0 0 0 4.271-7.219 8.226 8.226 0 0 0-16.451 0 8.172 8.172 0 0 0 4.27 7.219l-.134 9.629a98.988 98.988 0 0 0-3.225 1.945c-27.925 17.582-33.325 38.708-24.188 47.236 7.687 7.175 18.389-.996 26.87-10.308l-.403 28.937c-2.924.827-5.104 2.334-5.836 4.162-7.027-1.785-13.217-5.253-17.971-9.874a27.345 27.345 0 0 0 3.085-4.63c-8.375-4.322-13.608-9.111-13.608-18.538-1.442 3.698-2.189 6.453-2.189 10.581 0 6.795 2.11 13.136 5.801 18.581 1.074-.649 2.083-1.399 3.054-2.188 5.844 7.718 15.195 12.923 24.835 14.791 5.001.97 7.863 6.302 7.863 9.25 0-2.948 2.862-8.28 7.864-9.25 9.64-1.868 18.991-7.073 24.835-14.791.971.788 1.979 1.538 3.054 2.188 3.691-5.445 5.802-11.786 5.802-18.581 0-4.128-.748-6.883-2.189-10.581zm-13.625-38.759c3.204 3.75.758 8.598-2.669 12.277-1.822-.874-3.815-1.386-5.942-1.386-6.712 0-9.498 3.748-9.498 5.951 0 2.871 2.264 4.939 7.598 4.939 1.916 0 4.496-.919 7.166-2.459 1.239 1.646 2.079 3.899 2.079 6.892 0 9.878-6.374 16.843-11.777 16.843-3.68 0-6.333-2.511-8.083-5.669l-.508-36.409c8.392-4.297 17.07-6.32 21.634-.979zm-7.366 16.264c-1.411.92-2.637 1.466-3.335 1.466-2.47 0-2.702-.253-2.702-1.013 0-.57.367-1.14 2.702-1.14 1.008 0 2.174.22 3.335.687zm-44.177 25.147c-4.067-5.361-2.037-17.474 17.604-32.546a90.378 90.378 0 0 1 4.025-2.916l-.377 27.002c-7.916 10.145-17.118 13.909-21.252 8.46z" stroke-linejoin="bevel" /><path d="M441.06 40.769c0-1.351-1.329-3.482-6.775-3.482-5.786 0-7.897 1.014-23.998 1.014-33.687 0-39.765-3.989-57.114-3.989-13.044 0-17.856 4.559-17.856 10.384 0 6.68 4.148 11.709 6.347 17.16.178.44.343.883.491 1.33 2.154 6.458 2.154 13.17 2.154 16.336 0 6.332 4.052 9.878 11.396 9.878 7.346 0 12.475-4.179 13.932-6.712 5.951.127 9.624-.696 11.776-4.559 6.522 1.203 9.941-1.076 11.145-3.926 8.802 0 10.448-.634 13.931-5.509 7.915-.063 12.664-3.863 12.791-6.522a13.014 13.014 0 0 0 1.499-.316c4.739-1.298 8.125-5.107 8.125-7.979 6.839-2.596 9.245-6.078 8.675-9.308 1.961-.444 3.481-1.647 3.481-3.8zm-14.12 12.347c.379 2.026-3.293 6.522-8.676 8.042a9.999 9.999 0 0 1-.449.696c-2.158 3.044-6.485 5.5-11.962 5.382-2.786 4.369-8.041 5.89-14.373 5.636-2.026 3.736-6.269 4.686-11.081 4.496-2.659 3.546-7.409 4.559-11.524 4.559-3.799 3.42-7.852 5.319-12.537 5.319-6.374 0-8.991-3.377-8.991-7.852 0-2.786-.288-9.123-1.267-12.854a48.958 48.958 0 0 0-1.481-4.686c-1.559-4.199-2.951-6.396-2.951-10.828 0-4.559 3.799-6.205 10.765-6.205 3.799 0 23.597 2.533 46.898 2.533 17.73 0 25.658-.848 29.782-1.773 3.103-.696 4.622-.507 4.875.19.632 1.738-3.039 5.953-7.028 7.345zm7.282-10.574c1.74-.201-14.078 2.532-34.911 2.532-20.896 0-39.997-3.039-47.279-3.039-3.482 0-4.748.507-6.712.507-1.139 0-1.582-.063-1.582-.823s2.279-2.47 7.661-2.47c5.699 0 23.218 3.546 47.912 3.546 21.655 0 29.853-2.026 34.657-2.026 1.014 0 2.28 0 2.28.634 0 .632-.894 1.008-2.026 1.139z" stroke-linejoin="bevel" /><path d="M425.547 53.307c-16.97.76-34.257 1.393-52.493.38l-1.52 2.152c23.815.992 35.645.531 52.366-.253l1.647-2.279zM413.959 62.678l2.47-1.786c-16.059.096-32.757-.036-46.908-1.633l-1.634 1.899c19.269 1.638 30.621 1.601 46.072 1.52zM401.549 68.25l2.406-1.229c-14.564-.418-25.455-1.938-38.221-4.091l-1.874 1.52c14.726 2.209 22.871 3.547 37.689 3.8zM388.251 73.442l1.646-.925c-10.814-1.254-18.515-3.153-28.583-6.041L359.2 67.87c8.825 2.624 16.703 4.565 29.051 5.572zM377.234 77.747l1.772-1.19c-8.764-1.925-16.084-4.128-21.984-7.421l-1.977 1.14c7.371 3.799 13.07 5.495 22.189 7.471zM367.039 81.357c-6.712-2.597-11.145-5.826-14.121-10.321l-1.899.507c3.356 4.622 7.219 8.104 14.564 10.764l1.456-.95z" stroke-linejoin="bevel" /><path d="M368.748 50.646c21.022 1.014 42.552 1.394 59.838-.442l1.836-2.09c-8.104 1.013-19.629 1.393-29 1.393-23.682 0-39.131-2.089-46.983-2.089-5.657 0-8.358 1.266-8.358 3.926 0 3.664 1.329 4.875 1.329 7.598 0 2.09-.38 3.103-.38 5.952 0 2.153 2.279 2.66 3.863 2.66 3.356 0 8.104-1.71 8.104-6.079l-1.836.127c-.094 1.67-1.43 3.068-2.52 3.563-1.913.868-4.44.837-5.04-.018-.799-1.14-.229-2.977 1.221-3.32 1.58-.375 3.616-.163 6.339-.226l1.836-.127c2.09 0 4.654-2.85 4.654-5.16l-2.564-.032c.189 2.026-1.327 2.738-2.744 3.118-2.068.555-5.854.449-6.628-.269-1.03-.957.001-2.895 1.892-2.977 1.465-.062 3.997.19 7.48.127l2.564.032c1.298.001 5.097-2.753 5.097-5.667h-3.355c-.174 2.338-1.991 3.259-4.18 3.483-2.469.253-6.585.189-8.358-.38-1.772-.57-.571-2.509 1.166-2.977 2.824-.76 7.319-.507 11.372-.127h3.355v.001z" stroke-linejoin="bevel" /><path d="M380.463 51.09c1.772.634 1.329 2.786-.57 2.913l3.356.127c1.52-.761.886-2.786-.19-2.977l-2.596-.063zM377.803 56.093c3.863.316 2.724 3.862-2.723 3.735l5.065.253c3.609-.271 3.29-3.769 1.457-3.988h-3.799zM370.681 63.754c3.26.412 4.621-1.267 2.753-2.152l3.673.222c1.128.603.825 2.731-1.931 2.627l-4.495-.697zM368.907 65.147c2.241 1.214.417 2.943-3.135 2.564l4.021 1.076c2.563.095 3.609-2.279 2.374-3.135l-3.26-.505zM363.239 68.979c2.242 1.214.696 2.627-3.261 1.709l4.4 1.837c2.564.095 3.705-1.552 2.438-2.564l-3.577-.982zM358.269 71.827c2.026 1.773-.515 2.976-3.845 1.271l2.481 2.541c2.884.874 5.321-.52 4.797-2.36l-3.433-1.452zM369.824 50.679c0 .854-.917 3.071-1.646 3.799l2.279.127c.729-.823 1.646-2.691 1.773-3.8l-2.406-.126zM367.063 59.309c.729-.648 1.738-2.199 1.967-3.163l-1.992-.195c-.091.754-1.137 2.61-1.855 3.176l1.88.182zM362.593 63.379c.73-.474 1.83-1.706 2.161-2.525l-1.579-.266c-.182.653-1.354 2.151-2.065 2.553l1.483.238zM358.881 65.931c.163.08 1.352-.834 1.786-1.51l-1.166-.335c-.272.553-1.572 1.691-1.704 1.55l1.084.295zM355.993 67.849c.229.001 1.506-.595 2.044-1.126l-.754-.404c-.363.451-1.789 1.231-1.977 1.18l.687.35zM354.18 68.107c-.454.351-2.008.771-2.376.619l.288.406c.419.113 1.788-.165 2.428-.552l-.34-.473zM246.351 34.311c-17.35 0-23.428 3.989-57.114 3.989-16.101 0-18.212-1.014-23.998-1.014-5.446 0-6.776 2.132-6.776 3.482 0 2.153 1.52 3.356 3.483 3.8-.57 3.229 1.836 6.712 8.675 9.308 0 2.871 3.386 6.681 8.125 7.979.486.133.987.24 1.5.316.126 2.659 4.875 6.459 12.79 6.522 3.483 4.875 5.129 5.509 13.931 5.509 1.203 2.85 4.622 5.129 11.145 3.926 2.153 3.862 5.825 4.686 11.777 4.559 1.456 2.533 6.585 6.712 13.931 6.712 7.345 0 11.397-3.546 11.397-9.878 0-3.166 0-9.878 2.153-16.336.148-.447.313-.89.491-1.33 2.198-5.451 6.347-10.48 6.347-17.16-.001-5.826-4.812-10.384-17.857-10.384zm-83.076 7.091c0-.634 1.266-.634 2.279-.634 4.806 0 13.002 2.026 34.657 2.026 24.695 0 42.214-3.546 47.912-3.546 5.382 0 7.662 1.71 7.662 2.47s-.443.823-1.583.823c-1.963 0-3.23-.507-6.712-.507-7.282 0-26.384 3.039-47.28 3.039-20.832 0-36.65-2.733-34.911-2.532-1.13-.13-2.024-.506-2.024-1.139zm91.648 20.452a48.608 48.608 0 0 0-1.48 4.686c-.979 3.731-1.267 10.068-1.267 12.854 0 4.475-2.617 7.852-8.992 7.852-4.686 0-8.737-1.899-12.537-5.319-4.116 0-8.864-1.013-11.524-4.559-4.812.189-9.055-.76-11.081-4.496-6.332.254-11.587-1.267-14.373-5.636-5.477.118-9.803-2.338-11.961-5.382a10.016 10.016 0 0 1-.45-.696c-5.382-1.52-9.055-6.016-8.675-8.042-3.989-1.393-7.66-5.607-7.028-7.345.253-.697 1.773-.887 4.876-.19 4.124.926 12.052 1.773 29.781 1.773 23.302 0 43.1-2.533 46.9-2.533 6.964 0 10.764 1.646 10.764 6.205-.001 4.433-1.394 6.629-2.953 10.828z" stroke-linejoin="bevel" /><path d="M173.976 53.307c16.97.76 34.256 1.393 52.492.38l1.52 2.152c-23.815.992-35.645.531-52.366-.253l-1.646-2.279zM185.563 62.678l-2.47-1.786c16.06.096 32.757-.036 46.908-1.633l1.633 1.899c-19.267 1.638-30.619 1.601-46.071 1.52zM211.271 73.442l-1.646-.925c10.815-1.254 18.515-3.153 28.583-6.041l2.114 1.394c-8.825 2.624-16.703 4.565-29.051 5.572zM222.289 77.747l-1.773-1.19c8.764-1.925 16.084-4.128 21.985-7.421l1.976 1.14c-7.371 3.799-13.07 5.495-22.188 7.471zM232.484 81.357c6.712-2.597 11.144-5.826 14.12-10.321l1.9.507c-3.356 4.622-7.219 8.104-14.563 10.764l-1.457-.95z" stroke-linejoin="bevel" /><path d="M230.774 50.646c-21.022 1.014-42.552 1.394-59.838-.442l-1.836-2.09c8.105 1.013 19.629 1.393 29.001 1.393 23.682 0 39.131-2.089 46.983-2.089 5.656 0 8.359 1.266 8.359 3.926 0 3.664-1.331 4.875-1.331 7.598 0 2.09.38 3.103.38 5.952 0 2.153-2.279 2.66-3.863 2.66-3.356 0-8.105-1.71-8.105-6.079l1.836.127c.094 1.67 1.429 3.068 2.52 3.563 1.912.868 4.439.837 5.039-.018.799-1.14.23-2.977-1.22-3.32-1.581-.375-3.616-.163-6.339-.226l-1.836-.127c-2.089 0-4.654-2.85-4.654-5.16l2.565-.032c-.19 2.026 1.326 2.738 2.743 3.118 2.068.555 5.854.449 6.627-.269 1.031-.957 0-2.895-1.891-2.977-1.465-.062-3.998.19-7.48.127l-2.565.032c-1.296.001-5.095-2.753-5.095-5.667h3.355c.173 2.338 1.991 3.259 4.179 3.483 2.47.253 6.585.189 8.358-.38 1.773-.57.572-2.509-1.166-2.977-2.824-.76-7.319-.507-11.372-.127h-3.354v.001z" stroke-linejoin="bevel" /><path d="M219.06 51.09c-1.772.634-1.33 2.786.57 2.913l-3.356.127c-1.519-.761-.886-2.786.19-2.977l2.596-.063zM221.72 56.093c-3.863.316-2.723 3.862 2.722 3.735l-5.065.253c-3.608-.271-3.29-3.769-1.456-3.988h3.799zM230.616 65.147c-2.242 1.214-.418 2.943 3.134 2.564l-4.021 1.076c-2.564.095-3.609-2.279-2.375-3.135l3.262-.505zM236.283 68.979c-2.242 1.214-.697 2.627 3.261 1.709l-4.401 1.837c-2.564.095-3.704-1.552-2.438-2.564l3.578-.982zM241.253 71.827c-2.026 1.773.515 2.976 3.845 1.271l-2.482 2.541c-2.883.874-5.321-.52-4.796-2.36l3.433-1.452zM229.698 50.679c0 .854.918 3.071 1.646 3.799l-2.279.127c-.729-.823-1.646-2.691-1.773-3.8l2.406-.126zM232.459 59.309c-.729-.648-1.738-2.199-1.967-3.163l1.993-.195c.091.754 1.136 2.61 1.855 3.176l-1.881.182zM236.93 63.379c-.731-.474-1.83-1.706-2.162-2.525l1.58-.266c.182.653 1.354 2.151 2.065 2.553l-1.483.238zM240.642 65.931c-.163.08-1.352-.834-1.786-1.51l1.166-.335c.272.553 1.572 1.691 1.705 1.55l-1.085.295zM243.529 67.849c-.228.001-1.506-.595-2.044-1.126l.753-.404c.364.451 1.79 1.231 1.977 1.18l-.686.35zM245.343 68.107c.454.351 2.008.771 2.376.619l-.288.406c-.419.113-1.787-.165-2.428-.552l.34-.473zM228.843 63.754c-3.261.412-4.622-1.267-2.754-2.152l-3.672.222c-1.128.603-.825 2.731 1.931 2.627l4.495-.697z" stroke-linejoin="bevel" /><path d="M197.974 68.25l-2.406-1.229c14.564-.418 25.455-1.938 38.22-4.091l1.875 1.52c-14.726 2.209-22.872 3.547-37.689 3.8z" stroke-linejoin="bevel" /></g></svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="885" viewBox="0 0 108.24 38.312"><path d="M51.097 23.01l1.253-7.29h2.886l.493 4.557 2.089-4.557h2.885l-1.291 7.29h-2.127l.379-2.24.229-1.102.341-1.328-2.164 4.67h-1.632l-.531-4.67-.115 1.064-.114 1.139-.455 2.467h-2.126zM68.145 19.328c-.428 2.484-2.344 3.881-4.518 3.871-2.271.01-3.549-1.408-3.115-3.871.406-2.306 2.217-3.793 4.482-3.797 2.604.004 3.5 1.877 3.151 3.797z"/><path d="M62.906 19.328c-.17.934-.092 2.098 1.062 2.088 1.021.01 1.584-.881 1.783-2.088.188-.99-.031-2.042-1.1-2.014-1.073.002-1.589 1.096-1.745 2.014z" fill="#fff"/><path d="M68.789 15.72h6.684l-.342 1.937h-2.164l-.949 5.353h-2.393l.949-5.353h-2.125l.34-1.937zM82.459 19.328c-.443 2.484-2.359 3.881-4.52 3.871-2.285.01-3.564-1.408-3.111-3.871.387-2.306 2.199-3.793 4.479-3.797 2.591.004 3.486 1.877 3.152 3.797z"/><path d="M77.182 19.328c-.146.934-.07 2.098 1.062 2.088 1.045.01 1.607-.881 1.822-2.088.172-.99-.047-2.042-1.102-2.014-1.087.002-1.605 1.096-1.782 2.014z" fill="#fff"/><path d="M85.078 20.467l-.455 2.543H82.27l1.252-7.29h3.455c2.432.006 3.115.665 2.848 2.088-.129.834-.629 1.543-1.52 1.785.717.273 1.152.457.875 1.936-.15.939-.236 1.264.037 1.254l-.037.227h-2.43c-.016-.154.006-.621.113-1.252.176-.969.068-1.281-1.062-1.291h-.723z"/><path d="M85.383 18.872h.91c.758.004 1.186-.178 1.291-.683.074-.518-.289-.761-.834-.76h-1.141l-.226 1.443z" fill="#fff"/><path d="M55.881 27.111c.014-.268-.092-.418-.266-.494-.139-.107-.344-.148-.57-.152-.533.004-.792.156-.835.418-.196 1.096 4.115.418 3.644 3.076-.295 1.686-1.846 2.504-3.833 2.506-1.941-.002-2.999-1.125-2.81-2.43h2.278a.664.664 0 0 0 .304.568c.163.119.405.18.646.189.589-.01 1.019-.203 1.064-.531.209-1.119-4.115-.359-3.607-3.15.255-1.543 1.73-2.322 3.568-2.316 2.008-.006 2.746 1.027 2.697 2.316h-2.28zM57.818 32.389l1.289-7.289h3.531c2.09.002 2.934.963 2.658 2.467-.266 1.562-1.371 2.555-3.455 2.545h-1.215l-.418 2.277h-2.39z"/><path d="M61.918 28.439c.555-.02 1-.24 1.102-.873.127-.674-.625-.766-1.141-.76h-.682l-.268 1.633h.989z" fill="#fff"/><path d="M64.803 32.275l1.291-7.291h5.961l-.303 1.709h-3.57l-.19 1.026h3.037l-.302 1.707h-3.038l-.189 1.14h3.682l-.266 1.709h-6.113zM71.637 32.275l1.291-7.291h5.924l-.266 1.709h-3.57l-.188 1.026h2.998l-.305 1.707h-2.998l-.189 1.14h3.682l-.303 1.709h-6.076zM78.283 32.275l1.291-7.291h3.188c2.346-.002 3.611 1.09 3.191 3.494-.486 2.74-2.201 3.793-4.559 3.797h-3.111z"/><path d="M80.977 30.566h.494c1.113.004 1.824-.582 2.051-1.975.283-1.504-.141-1.908-1.404-1.898h-.455l-.686 3.873z" fill="#fff"/><path d="M92.254 29.502h.039l1.594-4.518h2.316l-3.113 7.291h-2.356l-.074-4.252h-.037l-1.559 4.252h-2.353l-.531-7.291h2.316l.039 4.518 1.67-4.518h1.973l.076 4.518zM93.584 32.275l3.91-7.291h2.43l1.33 7.291h-2.393l-.113-.949h-2.355l-.455.949h-2.354z"/><path fill="#fff" d="M98.293 27.188l-1.178 2.619h1.481l-.303-2.619z"/><path d="M104.215 32.275h-2.354l.455-2.658-1.898-4.633h2.658l.836 2.469 1.67-2.469h2.658l-3.531 4.594-.494 2.697zM51.287 13.822l3.91-7.253h2.43l1.33 7.253h-2.393l-.113-.949h-2.355l-.456.949h-2.353z"/><path fill="#fff" d="M55.994 8.734l-1.176 2.62h1.481l-.305-2.62z"/><path d="M58.994 6.569h6.682l-.342 1.9h-2.125l-.949 5.353h-2.393l.949-5.353h-2.164l.342-1.9zM64.918 13.822l1.289-7.253H68.6l-.987 5.583h3.266l-.266 1.67h-5.695zM70.764 13.822l3.912-7.253h2.429l1.329 7.253h-2.391l-.115-.949h-2.354l-.455.949h-2.355z"/><path fill="#fff" d="M75.473 8.734l-1.178 2.62h1.48l-.302-2.62z"/><path d="M84.092 10.519l.189-1.633.418-2.317h2.278l-1.252 7.253h-2.241l-1.898-3.949-.229 1.67-.38 2.279h-2.315l1.291-7.253h2.24l1.899 3.95zM87.432 6.569h6.683l-.342 1.9h-2.125l-.949 5.353h-2.394l.949-5.353H87.09l.342-1.9zM91.648 13.822l3.872-7.253h2.431l1.328 7.253h-2.355l-.113-.949H94.42l-.457.949h-2.315z"/><path fill="#fff" d="M96.355 8.734l-1.214 2.62h1.519l-.305-2.62z"/><path d="M46.958 12.721c.249.539.418 1.063.418 1.063.126.312-.063.581-.418.57h-13.1c-.351.011-.389-.131-.076-.304l9.492-5.467c.317-.193.622-.335.684-.343.079.008.306.235.532.532.001-.001 1.764 2.36 2.468 3.949zM24.937 14.354a.59.59 0 0 1-.608-.608v-4.86a.622.622 0 0 1 .608-.646h4.138c.335.008.476.254.304.57l-2.923 5.013c-.188.296-.616.542-.95.531h-.569zM23.379 13.746a.64.64 0 0 1-.646.608h-.531c-.367.011-.795-.235-.987-.531L18.292 8.81c-.167-.316-.027-.562.303-.57h4.138c.345.008.63.292.646.646v4.86zM20.115 13.822c.193.296.053.542-.304.531H17c-.362.011-.894-.131-1.177-.304l-9.53-5.467c-.308-.192-.271-.334.077-.342h9.872c.355.008.784.254.949.57l2.924 5.012zM27.86 14.354c-.352.011-.493-.235-.305-.531l2.924-5.013c.17-.316.599-.562.949-.57H41.3c.352.008.39.15.076.343l-9.492 5.467c-.316.173-.847.315-1.177.304H27.86zM42.933 6.988c.123.153.077.228.077.228-.012.055-.103.093-.418.075H31.999c-.367.008-.508-.238-.342-.531l2.582-4.48a.708.708 0 0 1 .873-.266c-.001 0 5.116 2.07 7.821 4.974zM12.596 2.014c.309-.139.706-.022.873.266l2.582 4.48c.175.292.034.539-.304.531H5.116c-.306.018-.396-.02-.417-.075 0 0-.037-.075.076-.228 2.715-2.904 7.821-4.974 7.821-4.974zM22.733.001c.348-.022.63.212.646.569v6.113a.644.644 0 0 1-.646.607h-4.67c-.352.008-.78-.238-.949-.531l-2.81-4.822c-.178-.297-.086-.534.266-.608 0 .001 3.456-1.223 8.163-1.328zM33.099 1.33c.327.074.42.311.229.608L30.556 6.76c-.194.292-.623.539-.987.531h-4.67a.603.603 0 0 1-.608-.607V.57c-.008-.357.273-.591.608-.569 4.72.105 8.2 1.329 8.2 1.329zM.711 12.721c.709-1.588 2.507-3.949 2.507-3.949.192-.296.42-.524.493-.532.069.008.372.15.684.343l9.493 5.467c.319.173.28.315-.076.304H.712c-.349.011-.539-.257-.417-.57-.001 0 .173-.525.416-1.063zM44.491 29.541c-.226.277-.453.506-.532.494-.062.012-.367-.131-.684-.305l-9.492-5.467c-.313-.193-.275-.334.076-.342h13.099c.355.008.544.277.418.607 0 0-.169.504-.418 1.062-.704 1.572-2.467 3.951-2.467 3.951zM25.505 23.922c.334.008.762.254.95.568l2.923 5.012c.172.299.031.545-.304.533h-4.138a.59.59 0 0 1-.608-.609v-4.857a.62.62 0 0 1 .608-.646h.569v-.001zM23.379 29.426a.638.638 0 0 1-.646.609h-4.138c-.33.012-.47-.234-.303-.533l2.923-5.012c.192-.314.62-.561.987-.568h.531c.345.008.63.291.646.646v4.858zM17.19 29.502c-.165.299-.593.545-.949.533H6.37c-.347.012-.385-.131-.076-.305l9.53-5.467c.283-.193.815-.334 1.177-.342h2.81c.357.008.498.254.304.568l-2.925 5.013zM30.708 23.922c.33.008.861.148 1.177.342l9.492 5.467c.314.174.276.316-.076.305h-9.872c-.35.012-.779-.234-.949-.533l-2.924-5.012c-.188-.314-.047-.561.305-.568h2.847v-.001zM35.111 36.262c-.298.158-.697.039-.873-.266l-2.582-4.443c-.166-.311-.025-.557.342-.568h10.593c.315.002.406.039.418.113 0 0 .046.057-.077.189-2.704 2.922-7.821 4.975-7.821 4.975zM4.774 31.287c-.113-.133-.076-.189-.076-.189.022-.074.112-.111.417-.113h10.631c.338.012.479.258.304.568l-2.582 4.443a.664.664 0 0 1-.873.266c.001 0-5.105-2.053-7.821-4.975zM14.57 36.982c-.352-.092-.444-.328-.266-.645l2.81-4.785c.169-.311.597-.557.949-.568h4.67c.345.012.63.297.646.645v6.113c-.016.338-.298.572-.646.57-4.707-.124-8.163-1.33-8.163-1.33zM24.898 38.312c-.335.002-.616-.232-.608-.57v-6.113a.638.638 0 0 1 .608-.645h4.67c.364.012.792.258.987.568l2.772 4.785c.192.316.099.553-.229.645.001 0-3.479 1.206-8.2 1.33zM.294 24.529c-.122-.33.068-.6.417-.607h13.1c.356.008.395.148.076.342L4.395 29.73c-.312.174-.615.316-.683.305-.073.012-.301-.217-.493-.494 0 0-1.798-2.379-2.507-3.949-.244-.559-.418-1.063-.418-1.063z" fill="#636466"/><path d="M46.882 16.936l-9.492 5.506c-.316.166-.49.033-.418-.305 0 0 1.597-4.555-3.038-4.442 0 0-5.092-.56-3.949 3.569 0 0 .515.906.038 1.291 0 0-.156.195-1.366.189H13.089c-.367.006-.498-.234-.303-.531 0 0 1.84-4.71-3.152-4.632 0 0-4.266-.146-3.417 3.494 0 0 .236.568.114.949 0 0-.037.488-.835.531H1.434c-1.256.037-1.405-.494-1.405-.494-.22-.709.911-1.178.911-1.178l6.531-3.644c.315-.152.849-.29 1.215-.303h13.783c.364.013.889-.139 1.177-.342l.949-.568c.286-.19.811-.342 1.177-.342h21.111s.73 0 .721.494c0-.002.007.322-.722.758z"/></svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="679" viewBox="0 0 615.489 167.215"><path d="M185.082 19.546c-2.138 14.354-6.414 49.172 2.749 83.684 1.833 4.58 6.414 3.359 8.247 1.221.611-.916 6.719-6.719 6.719-6.719 2.138-3.055 4.276-2.139 5.803 0 1.527 2.139 5.803 8.857 12.217 9.162 6.413.305 16.492-7.33 20.462-10.385 2.749 5.193 6.108 10.08 11.606 9.773 5.498-.305 10.689-4.275 15.271-9.162 3.36 3.971 7.025 8.246 11.301 7.941 4.275-.305 12.217-4.887 19.852-11.912 3.054-3.359 6.414-1.832 8.551 1.527s5.192 8.857 9.163 8.857c3.97 0 9.772-5.498 11.604-7.025 1.833-1.525 3.665-2.748 5.804-.305l4.581 4.275c2.749 2.75 8.552 2.139 12.827-1.832 4.276-3.971 5.192-5.191 7.024-5.191 1.833 0 2.749 2.443 4.581 4.275 1.833 1.832 15.882 14.049 34.513-4.887.305 9.469-1.833 62.609-1.833 70.246 0 3.664 4.275 4.887 10.385 3.664 6.107-1.221 9.162-3.055 8.856-11.91-.306-8.857-1.527-52.531-1.527-52.531.917-7.025 7.024-18.631 13.438-18.936 6.414-.306 3.359 7.635.306 7.635s-6.414 1.527-6.414 4.275.917 10.689 18.937 10.689c18.019 0 20.156-5.803 25.044-7.941 3.054 5.803 12.216 14.967 37.565-1.221 5.192 6.107 14.966 13.744 25.655 6.107 3.359-2.748 6.719-9.162 5.497-14.66-.916-2.137-.306-3.053 1.222-3.053h10.079c2.138 0 5.803 1.527 7.024 7.635 1.222 6.109 5.497 11.301 8.857 10.994 3.358-.305 9.772-5.496 13.438-9.162 3.055 4.277 16.188 24.129 40.315-9.162 2.138-3.054-1.222-4.581-3.055-2.443-1.832 2.138-7.33 5.498-11.911 5.802-4.581.307-10.078-4.275-14.354-10.078-4.275-5.803-9.162-3.666-12.217.916-2.138 2.443-3.359 4.886-5.803 7.634-1.527-2.748-3.359-8.55-6.413-10.688-3.055-2.138-5.498-2.443-12.828-.611s-15.576 2.749-23.822 3.054c-4.581-.305-3.359 1.833-3.054 3.665.305 1.833 3.664 9.467-2.443 9.774-6.108.305-5.498-8.857-1.222-13.744 2.138-2.138-.917-6.72-4.276-4.887-3.359 1.833-5.497 2.749-8.246 7.024-2.748 4.276-8.552 10.69-18.02 10.995s-6.719-10.689-6.414-15.576c0-2.749-1.832-5.192-6.719-3.97s-11.301.611-10.689 14.048c-3.359 4.887-10.995 7.941-17.104 7.025-1.832-.307-2.443-1.223-1.832-3.359.611-2.139 2.138-14.049-7.024-17.104-9.163-3.054-16.188 1.222-20.769 5.192-2.443 1.222-3.054 0-3.054-2.138l.305-11.3c0-5.192-10.384-6.414-11.911-.306-1.527 6.108-3.359 18.02-12.521 22.296-9.163 4.275-12.217-1.223-17.104-7.331-4.887-6.108-9.773-5.803-15.271-.305l-5.498 5.192c-2.138 1.832-3.359 1.221-5.191-1.528-1.833-2.748-3.055-6.414-6.414-6.719s-3.971.916-6.414 2.749l-7.024 5.498c-2.748 2.137-3.359 2.137-6.107-1.528 0 0-4.582-7.635-9.162-7.635-4.582 0-6.109 2.749-8.857 4.887 0 0-7.025 4.887-9.468 7.024-2.443 2.139-9.468 6.414-16.187-3.665-2.443-3.665-6.719-6.414-9.773-1.222-3.054 5.191-7.94 13.132-11.605 10.689s2.443-9.467 7.024-10.079c4.581-.61 1.833-6.414-2.749-6.719-4.582-.305-11.911 2.749-15.271 6.719-3.359 3.971-8.857 8.551-14.354 8.247-5.497-.307-6.719-4.582-9.468-10.384-2.749-5.803-7.635-5.192-11.3-2.138-3.665 3.054-4.582 3.97-7.33 7.329-2.749 3.361-2.749 1.527-3.054-.609-.306-2.138-2.138-41.537.917-66.886 1.218-6.408-11.915-8.546-14.663 1.227z"/><path d="M474.004 66.615c5.248 0 9.502-4.254 9.502-9.502s-4.254-9.502-9.502-9.502-9.502 4.254-9.502 9.502 4.254 9.502 9.502 9.502zM169.811 76.354c-1.221.917-35.733 12.521-54.669 13.744V19.241c10.995.305 31.763 4.887 44.896 9.773 3.054 1.527 9.468-.305 2.749-7.024C147.21 9.468 122.777 0 90.403 0S0 18.02 0 54.669s46.423 54.975 90.708 54.975c31.153 0 60.167-11.301 81.241-31.458 3.36-3.359-.917-2.748-2.138-1.832zM65.049 90.045C38.687 84.615 20 70.96 20 54.975c0-15.979 18.702-29.629 45.049-35.063v70.133zM601.192 67.18c-2.464 0-4.462 1.937-4.462 4.302 0 2.415 1.998 4.352 4.462 4.352 2.451 0 4.438-1.937 4.438-4.352 0-2.366-1.986-4.302-4.438-4.302zm0 7.808c-2.011 0-3.616-1.532-3.616-3.506 0-1.912 1.605-3.457 3.616-3.457 1.985 0 3.591 1.544 3.591 3.457 0 1.974-1.605 3.506-3.591 3.506z"/><path d="M603.473 70.354c0-.405-.185-.833-.552-1.042-.38-.208-.797-.233-1.214-.233h-2.169v4.842h.735V71.69h.87l1.422 2.231h.846l-1.508-2.231c.883-.024 1.57-.379 1.57-1.336zm-2.391.735h-.809v-1.458h1.287c.625 0 1.177.086 1.177.71 0 .871-.956.748-1.655.748z"/></svg>
            </div>

            <div className='TOS'>
                <Link to="/">Terms of use</Link>
                <span className='dot'>.</span>
                <Link to="/">Privacy Policy</Link>
                <span className='dot'>.</span>
                <Link to="/">Cookies</Link>
            </div>
        </footer>
    );
};

export default Footer;