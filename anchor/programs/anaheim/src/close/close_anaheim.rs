use anchor_lang::prelude::*;
use crate::state::anaheim::Anaheim;

#[derive(Accounts)]
pub struct CloseAnaheim<'info> {
  #[account(mut, close = authority)]
  pub anaheim: Account<'info, Anaheim>,
  #[account(mut)]
  pub authority: Signer<'info>,
}
pub fn handler(_ctx: Context<CloseAnaheim>) -> Result<()> {
  msg!("Closing Anaheim account...");
  // Any pre-close logic here
  Ok(())
}
