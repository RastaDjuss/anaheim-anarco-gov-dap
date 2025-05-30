// === handlers/close_post.rs ===
use anchor_lang::prelude::*;
use crate::instructions::ClosePost;

pub fn handle_close_post(_ctx: Context<ClosePost>) -> Result<()> {
  // Post closing logic here
  Ok(())
}
