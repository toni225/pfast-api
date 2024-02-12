import {getUser, signout} from "../services/user.service";
import {useNavigate} from "react-router-dom";
import userData from "./data/user.data";
import {useEffect, useState} from "react";
import Layout from "./layout/Layout";
import * as userService from '../services/user.service'
import {toast} from "react-toastify";

const AccountPage = () => {
    const navigate = useNavigate()

    const [user,setUser] = useState({
        FirstName:'',
        MiddleName: '',
        LastName:'',
        Address:'',ContactNum:'',username:'',id:'',})

    const getUserInfo = async () => {
        try{
            const token = localStorage.getItem('session')
            if(token!==null){
                const response = await userService.getUser(token)

                return response
            }

        }catch (e) {
            console.log(e)
        }
    }

    useEffect(()=>{
        // getUserInfo()
        try{
            const getUser = localStorage.getItem('user')
            if(getUser!==null){
                setUser(JSON.parse(getUser))
            }
            // console.log(JSON.parse(user))
        }catch (e) {
            console.log(e)
        }


    },[])

    const onSignOut = async () => {
        try {
            const apiResponse = await signout()

            if(apiResponse.status === 200){
                navigate('/login')
                localStorage.clear()
                userData.session = {}
            }

        }catch (e) {
            console.log(e)
        }
    }

    const onGetUser = async () => {
        try {
            const token = localStorage.getItem('session')
            const apiResponse = await getUser(token)

            console.log(apiResponse)
        } catch (e) {
            navigate('/login')
        }
    }

    const onSubmitForm = async (e) => {
        try{
            e.preventDefault()
            const {data:{data:{user:{id}}}} = await getUserInfo()

            if(id===user.id){
                userService.updateUser(id,user)
                    .then(response=> {
                        toast.success(response.data.message)
                        localStorage.setItem('user',JSON.stringify(user))
                    })
                    .catch(e=>console.log(e))

            }

        }catch (e) {

        }
    }

  return (
      <Layout>
          <div className={"md:container md:mx-auto grid gap-4 grid-cols-3 place-items-center"}>
              {/*/!*{userData.session != null ? userData.session.user.id : "No Account"}*!/*/}

              {/*<button className={"border p-2 bg-slate-900 text-amber-100"} onClick={onSignOut}>Sign Out</button>*/}
              {/*<button className={"border p-2 bg-slate-900 text-amber-100"} onClick={onGetUser}>get User</button>*/}
              <div></div>
              <div className={'place-self-center'}>
                  <form className={'flex-row'} onSubmit={onSubmitForm}>
                      <div className={'my-2 flex justify-between'}>
                          <span className={'mr-2'}>Username</span>
                          <input
                              className={'border rounded border-gray-400'}
                              type={'text'}
                              value={user.username || ''}
                              onChange={e => setUser({...user, username: e.target.value})}
                          />
                      </div>
                      <div className={'my-2 flex justify-between'}>
                          <span className={'mr-2'}>First Name</span>
                          <input
                              className={'border rounded border-gray-400'}
                              type={'text'}
                              value={user.FirstName || ''}
                              onChange={e => setUser({...user, FirstName: e.target.value})}
                          />
                      </div>
                      <div className={'my-2 flex justify-between'}>
                          <span className={'mr-2'}>Middle Name</span>
                          <input
                              className={'border rounded border-gray-400'}
                              type={'text'}
                              value={user.MiddleName || ''}
                              onChange={e => setUser({...user, MiddleName: e.target.value})}
                          />
                      </div>
                      <div className={'my-2 flex justify-between'}>
                          <span className={'mr-2'}>Last Name</span>
                          <input
                              className={'border rounded border-gray-400'}
                              type={'text'}
                              value={user.LastName || ''}
                              onChange={e => setUser({...user, LastName: e.target.value})}
                          />
                      </div>
                      <div className={'my-2 flex justify-between'}>
                          <span className={'mr-2'}>Email</span>
                          <input
                              className={'border rounded border-gray-400'}
                              type={'email'}
                          />
                      </div>
                      <div className={'my-2 flex justify-between'}>
                          <span className={'mr-2'}>Address</span>
                          <input
                              className={'border rounded border-gray-400'}
                              type={'text'}
                              value={user.Address || ''}
                              onChange={e => setUser({...user, Address: e.target.value})}
                          />
                      </div>
                      <div className={'my-2 flex justify-between'}>
                          <span className={'mr-2'}>Contact Number</span>
                          <input
                              className={'border rounded border-gray-400'}
                              type={'text'}
                              value={user.ContactNum || ''}
                              onChange={e => setUser({...user, ContactNum: e.target.value})}
                          />
                      </div>
                      <div className={'my-2 flex justify-between'}>
                          <label htmlFor={'vehicles'} className={'mr-2'}>Vehicle</label>
                          <select id="vehicles" name="vehicles" className={'border rounded border-gray-400 w-1/2 mr-3'}>
                              <option value="volvo">4 wheels</option>
                              <option value="saab">2 wheels</option>
                          </select>
                      </div>
                      <div>
                          <button type={'submit'} className={'border bg-blue-800 text-white w-1/2 rounded'}>Save</button>
                          <button type={'button'} className={'border bg-blue-800 text-white w-1/2 rounded'}>Cancel</button>

                      </div>

                  </form>
              </div>
              <div className={'grid-rows-3 place-self-center text-center'}>
                  <div>
                      {/*<span>{user.username ? user.username : ''}</span>*/}
                  </div>
                  <div className={'my-5'}>
                      <button className={"rounded w-full px-2 text-white bg-red-700"}>Report</button>
                  </div>
                  <div>
                      <button
                          onClick={onSignOut}
                          className={"rounded w-full px-2 text-white bg-red-700"}
                      >Sign Out</button>
                  </div>

              </div>
          </div>
      </Layout>
  )
}

export default AccountPage
