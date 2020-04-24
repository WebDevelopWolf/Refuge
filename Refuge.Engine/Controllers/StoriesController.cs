using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Refuge.Engine.Data;

namespace Refuge.Engine.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class StoriesController : ControllerBase
    {
        private readonly DataContext _context;
        public StoriesController(DataContext context)
        {
            _context = context;

        }
        // GET - List of Availible Stories
        [HttpGet]
        public async Task<IActionResult> GetStories()
        {
            var stories = await _context.Stories.ToListAsync();
            return Ok(stories);
        }

        // GET - Single Story
        [HttpGet("{id}")]
        public async Task<IActionResult> GetStory(int id)
        {
            var story = await _context.Stories.FirstOrDefaultAsync(s => s.Id == id);
            return Ok(story);
        }
    }
}



