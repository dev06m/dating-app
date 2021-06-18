using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    [Authorize]
    public class UsersController : BaseApiController // restcontroller
    {

        public IUserRepository _userRepository { get; set; }
        public IMapper _mapper { get; set; }

        public UsersController(IUserRepository userRepository, IMapper mapper)
        {
            _mapper = mapper;
            _userRepository = userRepository;

        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers() // IEnumrerable ve ActionResult a bak
        {
            var users = await _userRepository.GetMembersAsync();
            return Ok(users);
            // var users = await _userRepository.GetUserAsync();

            // var usersToReturn = _mapper.Map<IEnumerable<MemberDto>>(users); 

            // return Ok(usersToReturn);
        }


        //api/users
        [HttpGet("{username}")]
        public async Task<ActionResult<MemberDto>> GetUser(string username)
        {
            return await _userRepository.GetMemberAsync(username);
        }

        // [HttpGet("{username}")]
        // public ActionResult<AppUser> GetUserByUsername(string username)
        // {
        //     return _context.Users.Find(username);
        // }
    }
}