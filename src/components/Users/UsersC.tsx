import React  from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/istockphoto-1300845620-612x612.jpg'
import {UserType} from "../../Redux/Reduce/usersReducer";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";

class UsersC extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);

    }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })

    }
     onPageChanged = ( p:number) => {
        this.props.setCurrentPage(p)
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
             this.props.setUsers(response.data.items)
         })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>

                <div className={ s.pagesBox}>{pages.map(p => <span onClick={() => this.onPageChanged(p)}
                                           className={this.props.currentPage === p ? s.selected : s.pages}>{p}</span>)}</div>

                {this.props.users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div className={s.imageBox}>
                        {u.photos.small ? u.photos.small : <img src={userPhoto}
                                                                alt="avatar"/>}

                    </div>
                    <div>
                        {u.followed ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> :
                            <button onClick={() => this.props.follow(u.id)}>Follow</button>}
                    </div>
                </span>
                    <span className={s.message}>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>


                </span>
                </div>)}
            </div>
        )

    }
}

export default UsersC;