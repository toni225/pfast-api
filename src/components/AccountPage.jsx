import * as userService from '../services/user.service'
import * as authService from '../services/auth.service'

import {getUser, signout} from "../services/user.service";
import {useNavigate} from "react-router-dom";
import userData from "./data/user.data";
import {useEffect, useState} from "react";
import Layout from "./layout/Layout";
import {toast} from "react-toastify";

const AccountPage = () => {
    const navigate = useNavigate()

    const [email,setEmail] = useState('')
    const [isParkingOwner,setIsParkingOwner] = useState(null)
    const [user,setUser] = useState({
        FirstName:'',
        MiddleName: '',
        LastName:'',
        Address:'',ContactNum:0,username:'',id:''})

    useEffect(()=>{
        // getUserInfo()
        try{
            authService.getUserInfo().then(response=>{
                setEmail(response.data.data.user.email)
                setIsParkingOwner(response.data.data.user?.user_metadata.isParkingOwner)
                // console.log(response)
            })
                .catch(e=>{console.log(e)})
            const getUser = localStorage.getItem('user')
            if(getUser!==null){
                setUser(JSON.parse(getUser))
            }
            // console.log(JSON.parse(user))
        }catch (e) {
            console.log(e)
        }


    },[])

    // const onGetUser = async () => {
    //     try {
    //         const token = localStorage.getItem('session')
    //         const apiResponse = await getUser(token)
    //
    //         console.log(apiResponse)
    //     } catch (e) {
    //         navigate('/login')
    //     }
    // }

    const onSubmitForm = async (e) => {
        try{
            e.preventDefault()

            const getUser = localStorage.getItem('user')
            const {data:{data:{user:{id}}}} = await authService.getUserInfo()

            const payload = {
                FirstName: user.FirstName,
                MiddleName: user.MiddleName,
                LastName:user.LastName,
                Address:user.Address,ContactNum:user.ContactNum,
                username:user.username,id}

            if(getUser === null){
                userService.addUser(payload)
                    .then(response=>{
                        toast.success(response.data.message)
                        localStorage.setItem('user',JSON.stringify(payload))
                    })
                    .catch(e=>{
                        if(e.response.data.message.error.code == 23505){
                            toast.warning(`${user.username} is already exists.`)
                        }
                    })
            }

            if(id===user.id){
                userService.updateUser(id,payload)
                    .then(response=> {
                        toast.success(response.data.message)
                        localStorage.setItem('user',JSON.stringify(user))
                    })
                    .catch(e=>console.log(e))

            }



        }catch (e) {
            console.log(e)
        }
    }

  return (
      <Layout>
          <div className={"md:container md:mx-auto grid gap-4 grid-cols-3 place-items-center"}>
              {/*/!*{userData.session != null ? userData.session.user.id : "No Account"}*!/*/}

              {/*<button className={"border p-2 bg-slate-900 text-amber-100"} onClick={onSignOut}>Sign Out</button>*/}
              {/*<button className={"border p-2 bg-slate-900 text-amber-100"} onClick={onGetUser}>get User</button>*/}
              <div></div>
              <div className={'place-self-center bg-[#0f0e17] rounded-xl p-6 mt-10 text-white'}>
                  <form className={'flex-row'} onSubmit={onSubmitForm}>
                  <div className={'my-2 flex justify-between items-center'}>
                          <span className={'mr-2'}>{localStorage.getItem('user') !==null ? "*Username" : "Username"}</span>
                          <input
                              className={'disabled:cursor-not-allowed px-3 py-3 font-sans text-sm border rounded-md border-gray-400'}
                              type={'text'}
                              disabled={localStorage.getItem('user') !==null}
                              value={user.username || ''}
                              onChange={e => setUser({...user, username: e.target.value})}
                          />
                      </div>
                      <div className={'my-2 flex justify-between items-center'}>
                          <span className={'mr-2 '}>First Name</span>
                          <input
                              className={'disabled:cursor-not-allowed px-3 py-3 font-sans text-sm border rounded-md border-gray-400 bg-transparent'}
                              type={'text'}
                              value={user.FirstName || ''}
                              onChange={e => setUser({...user, FirstName: e.target.value})}
                          />
                      </div>
                      <div className={'my-2 flex justify-between items-center'}>
                          <span className={'mr-2'}>Middle Name</span>
                          <input
                              className={'disabled:cursor-not-allowed px-3 py-3 font-sans text-sm border rounded-md border-gray-400 bg-transparent'}
                              type={'text'}
                              value={user.MiddleName || ''}
                              onChange={e => setUser({...user, MiddleName: e.target.value})}
                          />
                      </div>
                      <div className={'my-2 flex justify-between items-center'}>
                          <span className={'mr-2'}>Last Name</span>
                          <input
                              className={'disabled:cursor-not-allowed px-3 py-3 font-sans text-sm border rounded-md border-gray-400 bg-transparent'}
                              type={'text'}
                              value={user.LastName || ''}
                              onChange={e => setUser({...user, LastName: e.target.value})}
                          />
                      </div>
                      <div className={'my-2 flex justify-between items-center'}>
                          <span className={'mr-2'}>Email</span>
                          <input
                              className={'disabled:cursor-not-allowed px-3 py-3 font-sans text-sm border rounded-md border-gray-400 bg-transparent'}
                              value={email || ''}
                              disabled
                              type={'email'}
                          />
                      </div>
                      <div className={'my-2 flex justify-between items-center'}>
                          <span className={'mr-2'}>Address</span>
                          <input
                              className={'disabled:cursor-not-allowed px-3 py-3 font-sans text-sm border rounded-md border-gray-400 bg-transparent'}
                              type={'text'}
                              value={user.Address || ''}
                              onChange={e => setUser({...user, Address: e.target.value})}
                          />
                      </div>
                      <div className={'my-2 flex justify-between items-center'}>
                          <span className={'mr-2'}>Contact Number</span>
                          <input
                              className={'disabled:cursor-not-allowed px-3 py-3 font-sans text-sm border rounded-md border-gray-400 bg-transparent'}
                              type={'text'}
                              value={user.ContactNum || ''}
                              onChange={e => setUser({...user, ContactNum: e.target.value})}
                          />
                      </div>
                      {!isParkingOwner && <div className={'my-2 flex justify-between items-center'}>
                          <label htmlFor={'vehicles'} className={'mr-2'}>Vehicle</label>
                          <select id="vehicles" name="vehicles" className={'disabled:cursor-not-allowed px-3 py-3 font-sans text-sm border rounded-md border-gray-400 bg-transparent hover:ring-4'}>
                              <option value="4" className='text-white bg-[#0f0e17]'>4 wheels</option>
                              <option value="2" className='text-white bg-[#0f0e17]'>2 wheels</option>
                          </select>
                      </div>}
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
                          onClick={authService.onSignOut}
                          className={"rounded w-full px-2 text-white bg-red-700"}
                      >Sign Out</button>
                  </div>
              </div>
          </div>
      </Layout>
  )
}

export default AccountPage
